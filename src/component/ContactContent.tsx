'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactContentProps {
  theme: string;
}

export default function ContactContent({ theme }: ContactContentProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formData.name.trim().length === 0) {
      return setFormError('⚠️ Name is required');
    }
    if (formData.email.trim().length === 0) {
      return setFormError('⚠️ Email is required');
    }
    if (formData.message.trim().length === 0) {
      return setFormError('⚠️ Message is required');
    } else {
      setFormError('');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-form', ...formData }),
      })
        .then(() => setShowSuccessMsg(true))
        .then(() => setFormData({ name: '', email: '', message: '' }))
        .catch((error) => alert(error));
    }
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const handleSendAnother = () => {
    setShowSuccessMsg(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="hero bg-base-200 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Let's Connect!</h1>
          <p className="py-2">
            Have a question or want to work together? I'd love to hear from you.
            Drop me a message, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div
          className="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl"
          style={{ minHeight: '400px' }}
        >
          <form onSubmit={handleSubmit} className="card-body">
            {!showSuccessMsg ? (
              <>
                <div className="form-control">
                  <label className="label" htmlFor="name">
                    <span className="label-text">Name</span>
                  </label>
                  <div className="input-group">
                    <span>
                      <Icon icon="bi:person-circle" className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="input-group">
                    <span>
                      <Icon icon="bi:envelope" className="h-5 w-5" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="message">
                    <span className="label-text">Message</span>
                  </label>
                  <div className="input-group">
                    <span>
                      <Icon icon="bi:chat-dots" className="h-5 w-5" />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className="textarea textarea-bordered w-full"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {formError && (
                  <div className="alert alert-error">
                    <Icon icon="bi:exclamation-triangle" className="h-5 w-5" />
                    <span>{formError}</span>
                  </div>
                )}
                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="alert alert-success">
                  <Icon
                    icon="bi:check-circle"
                    className="mx-auto mb-2 h-5 w-5"
                  />
                  <p>Your message has been sent successfully!</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={handleSendAnother}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
