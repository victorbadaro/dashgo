import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarDrawerContextData = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);

  return context;
}

export { SidebarDrawerProvider, useSidebarDrawer };
