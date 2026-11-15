import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuCheck, LuMail, LuSend } from 'react-icons/lu';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: LuMail },
  { label: 'LinkedIn', value: 'in/4699pankajkhatri', href: profile.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: `@${profile.githubUser}`, href: profile.github, icon: FaGithub },
];

const helpWith = [
  'Full-stack web apps on the MERN stack',
  'Responsive, accessible React frontends',
  'REST APIs with Node.js and Express',
];

const inputClass =
  'peer w-full rounded-xl border border-line bg-surface-2 px-4 pb-2.5 pt-6 text-sm text-fg placeholder-transparent outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25';
const labelClass =
  'pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent';

function Field({ id, label, as = 'input', ...props }) {
  const Tag = as;
  return (
    <div className="relative">
      <Tag id={id} placeholder={label} className={inputClass} {...props} />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || '-'}`, '', message].join('\r\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      intro="Have a role, a project or just a question? Send me a message and I'll get back to you as soon as I can."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Left column stretches to the form's height; the info card takes up the spare space */}
        <Reveal className="flex flex-col gap-3">
          <div className="flex flex-1 flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Available for work
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-fg">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Whether it&apos;s a full-time role, a freelance project or a collaboration, I&apos;d love to hear about it.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">What I can help with</p>
            <ul className="mt-3 space-y-2.5">
              {helpWith.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-fg">
                  <LuCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/60"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-on-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate text-sm font-semibold text-fg">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={100} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <form id="contactForm" onSubmit={handleSubmit} className="grid gap-4">
            <Field id="name" label="Full name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="email" label="Email address" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
              <Field id="phone" label="Contact number (optional)" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} />
            </div>
            <Field id="subject" label="Subject" type="text" maxLength={120} value={formData.subject} onChange={handleChange} required />
            <Field id="message" label="Message" as="textarea" rows={6} value={formData.message} onChange={handleChange} required />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              <LuSend className="size-4" aria-hidden="true" /> Send message
            </button>
            <p className="text-center text-xs text-muted">This opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
