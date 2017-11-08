 /*
  * Copyright 2017, GeoSolutions Sas.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * LICENSE file in the root directory of this source tree.
  */
const React = require('react');
const enhanceChartWidget = require('../enhancers/chartWidget');
const wpsChart = require('../enhancers/wpsChart');
const dependenciesToFilter = require('../enhancers/dependenciesToFilter');
const {pure} = require('recompose');
const {Responsive, WidthProvider: widthProvider} = require('react-grid-layout');
const ResponsiveReactGridLayout = widthProvider(Responsive);

require('react-grid-layout/css/styles.css');
require('react-resizable/css/styles.css');

const ChartWidget = dependenciesToFilter(wpsChart(enhanceChartWidget(require('../widget/ChartWidget'))));

module.exports = pure(({id, widgets=[], layouts, deleteWidget = () => {}, editWidget = () => {}, onLayoutChange = () => {}, dependencies}={}) =>
    (<ResponsiveReactGridLayout
        key={id}
        onLayoutChange={onLayoutChange}
        layouts={layouts ? JSON.parse(JSON.stringify(layouts)) : undefined}
        style={{left: 350, bottom: 50, height: 'calc(100% - 100px)', width: 'calc(100% - 400px)', position: 'absolute', zIndex: 50}}
        containerPadding={[10, 10]}
        className="widget-card-on-map"
        rowHeight={208}
        autoSize={false}
        compactType={'vertical'}
        verticalCompact={false}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 6, md: 6, sm: 1, xs: 1, xxs: 1}}>

     {widgets.map((w, i) => {
         return (<div key={w.id} className="widget-card-on-map" >
              <ChartWidget key={i} {...w}
                  dependencies={dependencies}
                  onDelete={() => deleteWidget(w)}
                  onEdit={() => editWidget(w)} />
         </div>);
     })}
 </ResponsiveReactGridLayout>));
