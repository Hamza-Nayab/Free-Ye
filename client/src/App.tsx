import React, { useState, useEffect } from 'react';
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navigation />
          <Router />
          <Toaster />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;