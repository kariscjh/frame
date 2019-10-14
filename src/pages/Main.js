import React from 'react';
import '../css/Main.css';
function BodyContents() {
    return (
      <section className="page_main">
          <div className="info_Box box type1">
            <p>JeongHwan Cho</p>
            <h1>What is your question or link?</h1>
          </div>

          <section className="contents_wrap">
            <div className="contents_box box type1">
              <div class="cb_top">Answer&middot;Popular</div>
              <div className="cb_title">People who've been to prison for a long time and got released, what was it like seeing all of the things that have changed?</div>
              <div className="cb_writer">
                Jim VanDerlin, studied at Penn State Altoona<br/>
                Updated Sat · Upvoted by Niclas Olovsson, M.S.; B.A Law & Informatics, Umeå University (1999)
              </div>
              <div className="cb_content">
                I was in prison for 25 years (1988 - 2013) so I missed the technology boom. Funny story: When I got out I went to live with some friends of mine (Gary and Karen) for about 9 months.<br/>
                They live sort ...(more)
              </div>
              <div class="cb_botom"></div>
            </div>
          </section>
        </section>

    );
  }
  
  export default BodyContents;