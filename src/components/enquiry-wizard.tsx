"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { MiniCalendar } from "@/components/ui/mini-calendar";
import {
  site,
  whatsappUrl,
  whatsappIsPlaceholder,
  occasionOptions,
  venueStatusOptions,
  atmosphereOptions,
  serviceOptions,
  budgetOptions,
  guestRanges,
  keralaDistricts,
} from "@/data/site";

type Enquiry = {
  occasion: string;
  dateMode: "" | "date" | "asap" | "unfixed";
  date: string;
  guests: string;
  district: string;
  city: string;
  venueName: string;
  venueStatus: string;
  atmosphere: string[];
  services: string[];
  budget: string;
  details: string;
  name: string;
  phone: string;
  whatsappSame: boolean;
  whatsapp: string;
  email: string;
  consent: boolean;
};

const initial: Enquiry = {
  occasion: "",
  dateMode: "",
  date: "",
  guests: "",
  district: "",
  city: "",
  venueName: "",
  venueStatus: "",
  atmosphere: [],
  services: [],
  budget: "Prefer to discuss",
  details: "",
  name: "",
  phone: "",
  whatsappSame: true,
  whatsapp: "",
  email: "",
  consent: false,
};

const STEP_TITLES = [
  "What are you planning?",
  "When is your event?",
  "How many guests?",
  "Where will it happen?",
  "Do you have a venue?",
  "What kind of atmosphere do you want?",
  "What do you need help with?",
  "What's the budget?",
  "Anything else we should know?",
  "How do we reach you?",
];

function digits(v: string) {
  return v.replace(/\D/g, "");
}

/* ---------------- field components (top level) ---------------- */

function Choice({
  value,
  label,
  current,
  onSelect,
}: {
  value: string;
  label: string;
  current: string;
  onSelect: (v: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={current === value}
      className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
        current === value
          ? "border-forest bg-forest text-white"
          : "border-line bg-white text-ink hover:border-ink/40"
      }`}
    >
      {label}
    </button>
  );
}

function Chip({
  value,
  current,
  onToggle,
}: {
  value: string;
  current: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(value)}
      aria-pressed={current.includes(value)}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        current.includes(value)
          ? "border-terracotta bg-terracotta text-white"
          : "border-line bg-white text-ink hover:border-ink/40"
      }`}
    >
      {value}
    </button>
  );
}

function FieldError({ id, errors }: { id: string; errors: Record<string, string> }) {
  if (!errors[id]) return null;
  return (
    <p id={`${id}-error`} role="alert" className="mt-2 text-[0.8rem] text-terracotta">
      {errors[id]}
    </p>
  );
}

const labelCls = "eyebrow mb-3 flex items-center gap-2 text-ink";
const inputCls =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[0.95rem] text-ink shadow-[0_1px_2px_rgba(22,32,47,0.04)] placeholder:text-taupe/70 focus:border-terracotta focus:outline-none";

/* ---------------- wizard ---------------- */

export function EnquiryWizard() {
  const params = useSearchParams();
  // prefill once from query params (?fasttrack=1, ?location=Kochi) — no effect needed
  const [data, setData] = useState<Enquiry>(() => ({
    ...initial,
    city: params.get("location") ?? "",
    dateMode: params.get("fasttrack") === "1" ? "asap" : "",
  }));
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggle = (key: "atmosphere" | "services", value: string) =>
    setData((d) => ({
      ...d,
      [key]: d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value],
    }));

  const over300 = data.guests === "300 or more";

  const message = useMemo(() => {
    const dateLine =
      data.dateMode === "asap"
        ? "I need an event within 3 days (fast-track)"
        : data.dateMode === "unfixed" || !data.date
          ? "Not finalized"
          : data.date;
    const locParts = [data.district, data.city].filter(Boolean).join(" / ") || "—";
    const venueLine = data.venueName ? `${data.venueStatus} (${data.venueName})` : data.venueStatus || "—";
    return [
      `Hello ${site.name}! I would like to enquire about planning an event.`,
      "",
      "*EVENT ENQUIRY — KNOT&KIN*",
      "",
      `Name: ${data.name || "—"}`,
      `Phone: ${data.phone || "—"}`,
      data.email ? `Email: ${data.email}` : null,
      "",
      `Event type: ${data.occasion || "—"}`,
      `Event date: ${dateLine}`,
      `Fast-track requirement: ${data.dateMode === "asap" ? "Yes" : "No"}`,
      `Guest count: ${data.guests || "—"}`,
      `Location: ${locParts}${data.venueName ? ` · Venue: ${data.venueName}` : ""}`,
      `Venue status: ${venueLine}`,
      `Preferred atmosphere: ${data.atmosphere.length ? data.atmosphere.join(", ") : "—"}`,
      `Services required: ${data.services.length ? data.services.join(", ") : "—"}`,
      `Budget: ${data.budget || "Prefer to discuss"}`,
      "",
      "Additional details:",
      data.details || "—",
      "",
      "I would like to discuss the next steps.",
      "",
      "Thank you.",
    ]
      .filter((l) => l !== null)
      .join("\n");
  }, [data]);

  function validate(s: number): Record<string, string> {
    const e: Record<string, string> = {};
    if (s === 0 && !data.occasion) e.occasion = "Please choose what you're planning.";
    if (s === 1) {
      if (!data.dateMode) e.dateMode = "Please choose an option.";
      if (data.dateMode === "date" && !data.date) e.date = "Please pick a date, or choose 'not finalized'.";
    }
    if (s === 2 && !data.guests) e.guests = "Please choose a guest range.";
    if (s === 3 && !data.district) e.district = "Please choose a district.";
    if (s === 4 && !data.venueStatus) e.venueStatus = "Please choose an option.";
    if (s === 6 && data.services.length === 0)
      e.services = "Choose at least one — 'Custom requirements' works too.";
    if (s === 9) {
      if (data.name.trim().length < 2) e.name = "Please tell us your name.";
      if (digits(data.phone).length < 10) e.phone = "Enter a valid mobile number.";
      if (!data.whatsappSame && digits(data.whatsapp).length < 10)
        e.whatsapp = "Enter a valid WhatsApp number.";
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email))
        e.email = "That email doesn't look right.";
      if (!data.consent) e.consent = "We need your OK to contact you about this enquiry.";
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => Math.min(s + 1, 9));
  }
  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  function send() {
    const e = validate(9);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_2px_20px_rgba(22,32,47,0.06)] sm:p-10 md:p-12">
      {/* progress — segmented pills like the reference stepper */}
      <div className="mb-10">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-taupe">Step {String(step + 1).padStart(2, "0")} / 10</p>
          <p className="font-serif text-lg text-ink">{STEP_TITLES[step]}</p>
        </div>
        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={10}
          aria-valuenow={step + 1}
          aria-label={`Enquiry progress: step ${step + 1} of 10`}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === step ? "w-9 bg-terracotta" : "w-5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>

      {sent ? (
        <div aria-live="polite" className="py-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-terracotta text-terracotta">
            <Icon name="check" size={26} />
          </span>
          <h3 className="mt-6 font-serif text-2xl text-ink md:text-3xl">
            Your enquiry message is ready.
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            Please send it in WhatsApp so our team can get back to you. If WhatsApp
            didn&apos;t open, use the button below.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="whatsapp" size={18} />
              Open WhatsApp Again
            </a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setSent(false);
                setStep(9);
              }}
            >
              Edit my enquiry
            </button>
          </div>
          {whatsappIsPlaceholder ? (
            <p className="mx-auto mt-8 max-w-lg rounded-sm border border-dashed border-brass/70 bg-parchment/60 p-4 text-left text-[0.78rem] leading-relaxed text-ink-soft">
              <strong>Setup note:</strong> the business WhatsApp number hasn&apos;t been configured
              yet (see <code>site.whatsappNumber</code> in <code>src/data/site.ts</code>). Your
              enquiry message is ready — copy it below and send it once the number is live.
            </p>
          ) : null}
          <details className="mx-auto mt-6 max-w-lg rounded-sm border border-line bg-ivory p-5 text-left">
            <summary className="cursor-pointer text-sm font-medium text-ink">
              View / copy your enquiry message
            </summary>
            <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap text-[0.8rem] leading-relaxed text-ink-soft">
              {message}
            </pre>
            <button
              type="button"
              className="btn btn-outline mt-4 min-h-0 px-5 py-2 text-[0.7rem]"
              onClick={() => navigator.clipboard?.writeText(message)}
            >
              Copy message
            </button>
          </details>
        </div>
      ) : (
        <div>
          {/* STEP 0 — occasion */}
          {step === 0 && (
            <fieldset>
              <legend className="sr-only">What are you planning?</legend>
              <div className="flex flex-wrap gap-2.5">
                {occasionOptions.map((o) => (
                  <Choice
                    key={o}
                    value={o}
                    label={o}
                    current={data.occasion}
                    onSelect={(v) => set("occasion", v)}
                  />
                ))}
              </div>
              <FieldError id="occasion" errors={errors} />
            </fieldset>
          )}

          {/* STEP 1 — when */}
          {step === 1 && (
            <fieldset>
              <legend className="sr-only">When is your event?</legend>
              <div className="flex flex-wrap gap-2.5">
                <Choice
                  value="date"
                  label="I have a date"
                  current={data.dateMode}
                  onSelect={(v) => set("dateMode", v as Enquiry["dateMode"])}
                />
                <Choice
                  value="asap"
                  label="I need an event within 3 days"
                  current={data.dateMode}
                  onSelect={(v) => set("dateMode", v as Enquiry["dateMode"])}
                />
                <Choice
                  value="unfixed"
                  label="Date not finalized"
                  current={data.dateMode}
                  onSelect={(v) => set("dateMode", v as Enquiry["dateMode"])}
                />
              </div>
              <FieldError id="dateMode" errors={errors} />
              {data.dateMode === "date" && (
                <div className="mt-6 grid max-w-xl gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <MiniCalendar value={data.date} onChange={(iso) => set("date", iso)} label="Preferred date" />
                  <div>
                    <label htmlFor="evt-date" className={labelCls}>
                      Or type the date
                    </label>
                    <input
                      id="evt-date"
                      type="date"
                      className={inputCls}
                      value={data.date}
                      onChange={(e) => set("date", e.target.value)}
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? "date-error" : undefined}
                    />
                  </div>
                </div>
              )}
              {data.dateMode === "date" && <FieldError id="date" errors={errors} />}
              {data.dateMode === "asap" && (
                <p
                  role="note"
                  className="mt-6 max-w-lg rounded-sm border border-brass/60 bg-parchment/70 p-4 text-sm leading-relaxed text-ink-soft"
                >
                  We&apos;ll treat this as a fast-track enquiry. Availability and event scope
                  determine feasibility — we&apos;ll confirm quickly what&apos;s possible for your
                  date.
                </p>
              )}
            </fieldset>
          )}

          {/* STEP 2 — guests */}
          {step === 2 && (
            <fieldset>
              <legend className="sr-only">How many guests?</legend>
              <div className="flex flex-wrap gap-2.5">
                {guestRanges.map((g) => (
                  <Choice
                    key={g}
                    value={g}
                    label={g}
                    current={data.guests}
                    onSelect={(v) => set("guests", v)}
                  />
                ))}
                <Choice
                  value="300 or more"
                  label="300 or more"
                  current={data.guests}
                  onSelect={(v) => set("guests", v)}
                />
              </div>
              <FieldError id="guests" errors={errors} />
              {over300 && (
                <div
                  role="alert"
                  className="mt-6 max-w-xl rounded-sm border border-terracotta/50 bg-parchment/70 p-5"
                >
                  <p className="text-sm leading-relaxed text-ink">
                    Our current focus is events for fewer than 300 guests. Please contact us to
                    discuss whether your requirements can be accommodated.
                  </p>
                  <a
                    href={whatsappUrl(
                      `Hello ${site.name}! My event has 300 or more guests and I'd like to discuss whether you can accommodate it.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline mt-4 min-h-0 px-5 py-2.5 text-[0.72rem]"
                  >
                    <Icon name="whatsapp" size={16} />
                    Discuss on WhatsApp
                  </a>
                </div>
              )}
            </fieldset>
          )}

          {/* STEP 3 — where */}
          {step === 3 && (
            <fieldset className="grid gap-6 sm:grid-cols-2">
              <legend className="sr-only">Where will it happen?</legend>
              <div>
                <label htmlFor="district" className={labelCls}>
                  District
                </label>
                <select
                  id="district"
                  className={inputCls}
                  value={data.district}
                  onChange={(e) => set("district", e.target.value)}
                  aria-invalid={!!errors.district}
                  aria-describedby={errors.district ? "district-error" : undefined}
                >
                  <option value="">Select a district</option>
                  {keralaDistricts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                  <option value="Outside Kerala">Outside Kerala</option>
                </select>
                <FieldError id="district" errors={errors} />
              </div>
              <div>
                <label htmlFor="city" className={labelCls}>
                  City / town
                </label>
                <input
                  id="city"
                  type="text"
                  className={inputCls}
                  placeholder="e.g. Fort Kochi"
                  value={data.city}
                  onChange={(e) => set("city", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="venueName" className={labelCls}>
                  Specific venue, if known
                </label>
                <input
                  id="venueName"
                  type="text"
                  className={inputCls}
                  placeholder="Type a venue name, or leave blank"
                  value={data.venueName}
                  onChange={(e) => set("venueName", e.target.value)}
                />
                <p className="mt-3 flex items-center gap-2 text-[0.8rem] text-taupe">
                  <Icon name="sparkle" size={14} className="text-brass" />
                  Need help finding a venue? Say so in additional details — venue-finding is one of
                  our services.
                </p>
              </div>
            </fieldset>
          )}

          {/* STEP 4 — venue status */}
          {step === 4 && (
            <fieldset>
              <legend className="sr-only">Do you have a venue?</legend>
              <div className="flex flex-wrap gap-2.5">
                {venueStatusOptions.map((v) => (
                  <Choice
                    key={v}
                    value={v}
                    label={v}
                    current={data.venueStatus}
                    onSelect={(val) => set("venueStatus", val)}
                  />
                ))}
              </div>
              <FieldError id="venueStatus" errors={errors} />
            </fieldset>
          )}

          {/* STEP 5 — atmosphere */}
          {step === 5 && (
            <fieldset>
              <legend className="sr-only">What kind of atmosphere do you want?</legend>
              <p className="mb-4 text-sm text-taupe">Select any that apply.</p>
              <div className="flex flex-wrap gap-2.5">
                {atmosphereOptions.map((a) => (
                  <Chip key={a} value={a} current={data.atmosphere} onToggle={(v) => toggle("atmosphere", v)} />
                ))}
              </div>
            </fieldset>
          )}

          {/* STEP 6 — services */}
          {step === 6 && (
            <fieldset>
              <legend className="sr-only">What do you need help with?</legend>
              <p className="mb-4 text-sm text-taupe">Select any that apply.</p>
              <div className="flex flex-wrap gap-2.5">
                {serviceOptions.map((s) => (
                  <Chip key={s} value={s} current={data.services} onToggle={(v) => toggle("services", v)} />
                ))}
              </div>
              <FieldError id="services" errors={errors} />
            </fieldset>
          )}

          {/* STEP 7 — budget */}
          {step === 7 && (
            <fieldset>
              <legend className="sr-only">What&apos;s the budget?</legend>
              <p className="mb-4 text-sm text-taupe">Optional — this helps us shape honest plans.</p>
              <div className="flex flex-wrap gap-2.5">
                {budgetOptions.map((b) => (
                  <Choice key={b} value={b} label={b} current={data.budget} onSelect={(v) => set("budget", v)} />
                ))}
              </div>
            </fieldset>
          )}

          {/* STEP 8 — details */}
          {step === 8 && (
            <fieldset>
              <legend className="sr-only">Additional details</legend>
              <label htmlFor="details" className={labelCls}>
                Tell us anything else about your event, idea, or special requirements
              </label>
              <textarea
                id="details"
                rows={6}
                className={inputCls}
                placeholder="The story, the people, the feeling, the must-haves…"
                value={data.details}
                onChange={(e) => set("details", e.target.value)}
              />
            </fieldset>
          )}

          {/* STEP 9 — contact */}
          {step === 9 && (
            <fieldset className="grid gap-6 sm:grid-cols-2">
              <legend className="sr-only">Contact details</legend>
              <div>
                <label htmlFor="cname" className={labelCls}>
                  Full name *
                </label>
                <input
                  id="cname"
                  type="text"
                  autoComplete="name"
                  className={inputCls}
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <FieldError id="name" errors={errors} />
              </div>
              <div>
                <label htmlFor="cphone" className={labelCls}>
                  Mobile number *
                </label>
                <input
                  id="cphone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 …"
                  className={inputCls}
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <FieldError id="phone" errors={errors} />
              </div>
              <div>
                <label htmlFor="cemail" className={labelCls}>
                  Email address (optional)
                </label>
                <input
                  id="cemail"
                  type="email"
                  autoComplete="email"
                  className={inputCls}
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <FieldError id="email" errors={errors} />
              </div>
              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-ink">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#24344a]"
                    checked={data.whatsappSame}
                    onChange={(e) => set("whatsappSame", e.target.checked)}
                  />
                  WhatsApp number is the same as my mobile number
                </label>
              </div>
              {!data.whatsappSame && (
                <div>
                  <label htmlFor="cwa" className={labelCls}>
                    WhatsApp number *
                  </label>
                  <input
                    id="cwa"
                    type="tel"
                    inputMode="tel"
                    className={inputCls}
                    value={data.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  />
                  <FieldError id="whatsapp" errors={errors} />
                </div>
              )}
              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-[#24344a]"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  I agree to be contacted by {site.legalName} regarding my event enquiry.
                </label>
                <FieldError id="consent" errors={errors} />
              </div>

              {/* review summary */}
              <div className="rounded-lg border border-line bg-ivory p-6 sm:col-span-2">
                <p className="eyebrow mb-4 text-taupe">Review your enquiry</p>
                <pre className="max-h-64 overflow-auto whitespace-pre-wrap text-[0.8rem] leading-relaxed text-ink-soft">
                  {message}
                </pre>
              </div>
            </fieldset>
          )}

          {/* nav */}
          <div className="mt-10 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 0 ? (
              <button type="button" onClick={back} className="btn btn-outline">
                <Icon name="arrowLeft" size={15} />
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 9 ? (
              <button type="button" onClick={next} className="btn btn-primary">
                Continue
                <Icon name="arrow" size={15} className="arrow" />
              </button>
            ) : (
              <button type="button" onClick={send} className="btn btn-primary">
                <Icon name="whatsapp" size={17} />
                Send My Enquiry on WhatsApp
              </button>
            )}
          </div>

          {step === 9 && (
            <p className="mt-6 flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-taupe">
              <Icon name="sparkle" size={14} className="mt-0.5 shrink-0 text-brass" />
              Your enquiry will open WhatsApp with your details prefilled. You can review and send
              the message directly to our team. Nothing is stored on this website.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
