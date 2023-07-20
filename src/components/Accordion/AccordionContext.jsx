import { useContext } from 'react';
import { createContext, useState } from 'react';

export const AccordionContext = createContext(null);
export const AccordionItemContext = createContext(null);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`useAccordion must be used inside <Accordion />`);
  }

  return context;
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(`useAccordionItem must be used inside <Accordion />`);
  }

  return context;
}
