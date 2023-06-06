import {lazy} from 'react';

const Ecommerce = lazy(() => import("./Ecommerce"));
const Kanban = lazy(() => import("./Kanban"));
const Orders = lazy(() => import("./Orders"));
const Employees = lazy(() => import("./Employees"));
const Editor = lazy(() => import("./Editor"));
const Customers = lazy(() => import("./Customers"));
const ColorPicker = lazy(() => import("./ColorPicker"));
const Calendar = lazy(() => import("./Calendar"));
const Area = lazy(() => import("./Charts/Area"));
const Bar = lazy(() => import("./Charts/Bar"));
const ColorMapping = lazy(() => import("./Charts/ColorMapping"));
const Financial = lazy(() => import("./Charts/Financial"));
const Line = lazy(() => import("./Charts/Line"));
const Pie = lazy(() => import("./Charts/Pie"));
const Pyramid = lazy(() => import("./Charts/Pyramid"));
const Stacked = lazy(() => import("./Charts/Stacked"));
 
export {Ecommerce,Kanban,Orders,Employees,Editor,Customers,ColorPicker,Calendar,Area,Bar,ColorMapping,Financial,Line,Pie,Pyramid,Stacked};