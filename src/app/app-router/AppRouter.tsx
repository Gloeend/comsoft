import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {lazyImportPage} from "@shared/utils";

const Home = lazyImportPage("home");
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense>
          <Home/>
        </Suspense>
      }/>
      <Route path="*" element={
        <Suspense fallback={<span>loading...</span>}>
          <h3 className="text-center py-3.5 text-26px mt-52">404 error</h3>
          <p className="text-center text-20px">
            Ошибка
          </p>
        </Suspense>
      }/>
    </Routes>
  )
}