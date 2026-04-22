import { SectionHeader } from '../shared/SectionHeader';

export function AboutSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-neutral">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="about-layout">
        <div className="narrative-block">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {content.meetingInfo ? (
            <div className="about-note">
              <p className="entry-label">{content.meetingLabel}</p>
              <p>{content.meetingInfo}</p>
            </div>
          ) : null}
        </div>

        <div className="about-sidepanels">
          <ul className="identity-list">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {content.focusAreas?.length ? (
            <div className="about-note">
              <p className="entry-label">{content.focusAreasTitle}</p>
              <ul className="about-focus-list">
                {content.focusAreas.map((area) => (
                  <li key={area.title}>
                    <strong>{area.title}:</strong> {area.description}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
