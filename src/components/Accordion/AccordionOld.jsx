import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordion() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="accordion">
        {data.map((el) => (
          <div
            onClick={() => setActive(active === el.id ? null : el.id)}
            key={el.id}
            className={`item ${active === el.id ? 'open' : ''}`}
          >
            <p className="number">{String(el.id + 1).padStart(2, 0)}</p>
            <p className="text">{el.text}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            {active === el.id && (
              <div className="content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus voluptatibus voluptas perspiciatis saepe? Dolor cum,
                  quam laboriosam incidunt esse neque doloremque quaerat dicta
                  architecto totam? Molestiae illum aspernatur quaerat! Alias.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
