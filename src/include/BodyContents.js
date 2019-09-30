import React from 'react';
import LeftNav from "./LeftNav";
import PageName from "../pages/Main";

function BodyContents({page}) {
  return (
    <section className="body_wrap">
        <div className="body_left_wrap">
            <LeftNav />
        </div>
        <div className="body_right_wrap">
            <PageName />
        </div>
    </section>
  );
}

export default BodyContents;
