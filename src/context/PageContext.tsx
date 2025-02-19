import React,{createContext,useState, ReactNode} from 'react';

interface PageContextType {
    page: string;
    setPage: (page: string) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
    children: ReactNode;
}

export function PageProvider({children}: PageProviderProps) {    
    const [page, setPage] = useState<string>("Inicio");
    
    return (
        <PageContext.Provider value = {{page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}

export function usePage() {
    const context = React.useContext(PageContext);
  
    if (!context) {
      throw new Error("usePage must be used within a PageProvider");
    }
  
    return context;
  }