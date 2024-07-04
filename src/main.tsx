import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {AppRouter} from "@app/app-router";
import store from "@app/store/store.ts";
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import "./_reset.css";
import WebFont from "webfontloader";
import {Header} from "@widgets/header";

WebFont.load({
    google: {
        families: ["Arial:300,400,500,600,700,800", "sans-serif"]
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
        <Header/>
        <main>
            <AppRouter />
        </main>
    </BrowserRouter>
  </Provider>,
)