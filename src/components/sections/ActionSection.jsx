import { SectionHeader } from '../shared/SectionHeader';
import { SocialIcon } from '../shared/SocialIcon';

function ContactChannels({ channels }) {
  return (
    <div className="contact-channels">
      {channels.map((channel) => (
        <a
          key={channel.label}
          className="contact-channel-card"
          href={channel.href}
          target={channel.href.startsWith('mailto') ? undefined : '_blank'}
          rel={channel.href.startsWith('mailto') ? undefined : 'noreferrer'}
        >
          <span className="contact-channel-icon">
            <SocialIcon icon={channel.icon} />
          </span>
          <span className="contact-channel-label">{channel.label}</span>
          <span className="contact-channel-hint">{channel.hint}</span>
        </a>
      ))}
    </div>
  );
}

export function ActionSection({ content }) {
  return (
    <section
      id={content.id}
      className={`content-section band-section band-brief action-band action-band--${content.id}`}
    >
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      {content.channels ? (
        <ContactChannels channels={content.channels} />
      ) : (
        <dl className="detail-list">
          {content.items.map((item) => (
            <div key={item.label} className="detail-row">
              <dt>{item.label}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
