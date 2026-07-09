"use client";

import * as React from "react";
import {
  FINISHES,
  PRODUCT,
  SERVICES,
  type Finish,
  type FinishId,
} from "@/lib/product";

interface SelectionContextValue {
  finishId: FinishId;
  finish: Finish;
  setFinishId: (id: FinishId) => void;
  services: Record<string, boolean>;
  toggleService: (id: string) => void;
  servicesTotal: number;
  estimatedTotal: number;
}

const SelectionContext = React.createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [finishId, setFinishId] = React.useState<FinishId>("stainless-steel");
  const [services, setServices] = React.useState<Record<string, boolean>>({});

  const toggleService = React.useCallback((id: string) => {
    setServices((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const finish = React.useMemo(
    () => FINISHES.find((f) => f.id === finishId) ?? FINISHES[0],
    [finishId]
  );

  const servicesTotal = React.useMemo(
    () =>
      SERVICES.reduce(
        (sum, s) => (services[s.id] ? sum + s.price : sum),
        0
      ),
    [services]
  );

  const value: SelectionContextValue = React.useMemo(
    () => ({
      finishId,
      finish,
      setFinishId,
      services,
      toggleService,
      servicesTotal,
      estimatedTotal: PRODUCT.price + servicesTotal,
    }),
    [finishId, finish, services, toggleService, servicesTotal]
  );

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = React.useContext(SelectionContext);
  if (!ctx) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return ctx;
}
