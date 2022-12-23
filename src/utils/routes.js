import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
import { HRTeam } from "../views/HRTeam/HRTeam";
import { Benefits } from "../views/Benefits/Benefits";
import { PaySlip } from "../views/PaySlip/PaySlip";
import { PersonalInfoPayroll } from "../views/PersonalInfoPayroll/PersonalInfoPayroll";
import { ErrorPage } from "../views/ErrorPage/ErrorPage";
import { MySeverancePlan } from "../views/MySeverancePlan/MySeverancePlan";
import { AnnualIncomeStatement } from "../views/AnnualIncomeStatement/AnnualIncomeStatement";
import { MyCompensationMemo } from "../views/MyCompensationMemo/MyCompensationMemo";
import { CompensationReview } from "../views/MyCompensationMemo/CompensationReview";
import { EditHRTeam } from "../views/Admin/EditHRTeam";
export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hr-team" element={<HRTeam />} />
        <Route path="/monthly-payslip" element={<PaySlip />} />
        <Route
          path="/annual-income-statement"
          element={<AnnualIncomeStatement />}
        />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/my-severance-plan" element={<MySeverancePlan />} />
        <Route path="/my-compensation-memo" element={<MyCompensationMemo />} />
        <Route path="/compensation-review" element={<CompensationReview />} />
        <Route path="/edit-hr-team" element={<EditHRTeam />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
