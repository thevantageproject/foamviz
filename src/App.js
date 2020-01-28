import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
const HomePage = lazy(() => import('./HomePage'));
const VizPOIAnalytics = lazy(() => import('./VizPOIAnalytics'));
const VizCartographerJourney = lazy(() => import('./VizCartographerJourney'));
const VizDataGlobe = lazy(() => import('./VizDataGlobe'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/poi-analytics" component={VizPOIAnalytics} />
      <Route
        exact
        path="/cartographer-journey"
        component={VizCartographerJourney}
      />
      <Route
        path="/cartographer-journey/:id"
        component={VizCartographerJourney}
      />
      <Route exact path="/data-globe" component={VizDataGlobe} />
    </Suspense>
  </Router>
);

export default App;
