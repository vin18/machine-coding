import { useState } from 'react';
import {
  AccordionContext,
  AccordionItemContext,
  useAccordion,
  useAccordionItem,
} from './AccordionContext';
import './style.css';

const Accordion = ({ defaultActive = null, children }) => {
  const [activePanel, setActivePanel] = useState(defaultActive);

  const handlePanelClick = (id) => {
    if (id === activePanel) {
      setActivePanel(null);
      return;
    }
    setActivePanel(id);
  };

  const value = { activePanel, handlePanelClick };

  return (
    <AccordionContext.Provider value={value}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ id, children }) => {
  const { activePanel } = useAccordion();
  const value = { id };

  return (
    <AccordionItemContext.Provider value={value}>
      <div className={`item ${activePanel === id ? 'open' : ''}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const AccordionToggle = ({ children }) => {
  const { handlePanelClick } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <div onClick={() => handlePanelClick(id)} className="text">
      {children}
    </div>
  );
};

const AccordionPanel = ({ children }) => {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  return activePanel === id ? <div className="content">{children}</div> : null;
};

export default function AccordionComponent() {
  return (
    <Accordion defaultActive="1">
      <AccordionItem id="1">
        <AccordionToggle>Devtools Tech?</AccordionToggle>
        <AccordionPanel>
          The aim with Devtools Tech is to create a platform for Frontend
          Engineers where we all can improve, invest in ourselves, and grow by
          learning from high quality real world programming content. This is a
          platform where you can practice actual interview questions, watch
          courses, read blogs, and keep track of your progress across various
          domains and topics.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="2">
        <AccordionToggle>Is it Free?</AccordionToggle>
        <AccordionPanel>
          Yes, the platform and YouTube both are completely free!
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
