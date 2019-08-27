import React from "react";
import Header from "../components/Header";
import QuickLinks from "../components/QuickLinks";

function handleClick() {
  alert("Are you sure you want to join the group?");
}

function Classes() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 b">
            <QuickLinks />
          </div>
          <div className="col-md-10 b">
            <div className="classes-title">Classes</div>
            <div className="table table-bordered">
              <tr>
                <th>Class Name </th>
                <th>Section</th>
                <th>Instructor</th>
              </tr>

              <tr>
                <td>CMPS 101 - INTRODUCTION TO COMPUTER SCIENCE </td>
                <td>91NT-LEC Regular</td>
                <td>Steele Russell</td>
                <button className="btn-join" onClick={handleClick}>
                  Join Group
                </button>
              </tr>
              <tr>
                <td>CMPS 105 - COMPUTERS IN SOCIETY </td>
                <td>90NT-LEC Regular</td>
                <td>Matthew McNulty</td>
                <button className="btn-join" onClick={handleClick}>
                  Join Group
                </button>
              </tr>
              <tr>
                <td>CMPS 110 - COMPUTER FLUENCY </td>
                <td>01-LEC Regular</td>
                <td>Steele Russell</td>
                <button className="btn-join" onClick={handleClick}>
                  Join Group
                </button>
              </tr>
              <tr>
                <td> CMPS 110 - COMPUTER FLUENCY </td>
                <td>02-LEC Regular</td>
                <td>Allanagh Sewell</td>
                <button className="btn-join" onClick={handleClick}>
                  Join Group
                </button>
              </tr>
              <tr>
                <td> CMPS 110 - COMPUTER FLUENCY </td>
                <td>90NT-LEC Regular</td>
                <td>Allanagh Sewell</td>
                <button className="btn-join" onClick={handleClick}>
                  Join Group
                </button>
              </tr>
              <tr>
                <td> CMPS 110 - COMPUTER FLUENCY </td>
                <td>91NT-LEC Regular</td>
                <td>Allanagh Sewell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 110 - COMPUTER FLUENCY </td>
                <td>92NT-LEC Eight Wk 2</td>
                <td>Steele Russell</td>
                <button className="btn-join">Join Group</button>
              </tr>

              <tr>
                <td> CMPS 161 - ALGORITHM DESIGN AND IMPLEMENTATION I </td>
                <td>04-LEC Regular</td>
                <td>Bonnie Achee</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 161 - ALGORITHM DESIGN AND IMPLEMENTATION I </td>
                <td>06-LEC Regular</td>
                <td>Bonnie Achee</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 173 - SOFTWARE FOR MANAGEMENT OF DATA </td>
                <td>90NT-LEC Regular</td>
                <td>Bonnie Achee</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 173 - SOFTWARE FOR MANAGEMENT OF DATA </td>
                <td>91NT-LEC Regular</td>
                <td>Bonnie Achee</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 209 - INTRODUCTION TO APPLIED NETWORKING </td>
                <td>90NT-LEC Regular</td>
                <td>Paulo Regis</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 210 - SOCIAL SOFTWARE </td>
                <td>90NT-LEC Regular</td>
                <td>Steele Russell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 233 - DESK TOP PUBLISHING </td>
                <td>01-LEC Regular</td>
                <td>Allanagh Sewel</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 235 - WEBSITE DESIGN AND CONSTRUCTION </td>
                <td>90NT-LEC Regular</td>
                <td>Allanagh Sewell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 257 - DISCRETE STRUCTURE </td>
                <td>02-LEC Regular</td>
                <td>Omer Soysal</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 280 - ALGORITHM DESIGN AND IMPLEMENTATION II </td>
                <td>01-LEC Regular</td>
                <td>Omer Soysal</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 209 - INTRODUCTION TO APPLIED NETWORKING </td>
                <td>03-LEC Regular</td>
                <td>Quoc-Nam Tran</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 285 - SOFTWARE ENGINEERING </td>
                <td>01-LEC Regular</td>
                <td>Ghassan Alkadi</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 290 - COMPUTER ORGANIZATION </td>
                <td>01-LEC Regular</td>
                <td>Matthew McNulty</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 290 - COMPUTER ORGANIZATION </td>
                <td>02-LEC Regular</td>
                <td>Matthew McNulty</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 297 - DIGITAL LOGIC </td>
                <td>01-LEC Regular</td>
                <td>Cris Koutsougeras</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 329 - COMPUTER NETWORKING AND SECURITY </td>
                <td>01-LEC Regular</td>
                <td>Matthew McNulty</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 339 - DATABASE ADMINISTRATION </td>
                <td>01-LEC Regular</td>
                <td>Omer Soysal</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 383 - INFORMATION SYSTEMS </td>
                <td>01-LEC Regular</td>
                <td>Ghassan Alkadi</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 390 - DATA STRUCTURES </td>
                <td>01-LEC Regular</td>
                <td>Patrick McDowell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 390 - DATA STRUCTURES </td>
                <td>02-LEC Regular</td>
                <td>Patrick McDowell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 394 - WEB SYSTEMS AND TECHNOLOGIES </td>
                <td>01-LEC Regular</td>
                <td>Cris Koutsougeras</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 297 - DIGITAL LOGIC </td>
                <td>01-LEC Regular</td>
                <td>Cris Koutsougeras</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 400 - INTERNSHIP </td>
                <td>01-FLD Regular</td>
                <td>Brian Crother</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 400 - INTERNSHIP </td>
                <td>02-FLD Regular</td>
                <td>Brian Crother</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 401 - SURVEY OF PROGRAMMING LANGUAGES </td>
                <td>01-LEC Regular</td>
                <td>Kuo-Pao Yang</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 409 - ADVANCED COMPUTER NETWORKING </td>
                <td>01-LEC Regular</td>
                <td>Paulo Regis</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 420 - HUMAN COMPUTER INTERACTION </td>
                <td>01-LEC Regular</td>
                <td>John Burris</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 434 - FUNDAMENTAL ALGORITHMS </td>
                <td>01-LEC Regular</td>
                <td>Quoc-Nam Tran</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 447 - INTRODUCTION TO ROBOTICS</td>
                <td>01-LEC Regular</td>
                <td>Patrick McDowell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 479 - AUTOMATA AND FORMAL LANGUAGES </td>
                <td>01-LEC Regular</td>
                <td>Cris Koutsougeras</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 482 - CURRENT TRENDS IN COMPUTER SCIENCE </td>
                <td>01-LEC Regular</td>
                <td>John Burris</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 482 - CURRENT TRENDS IN COMPUTER SCIENCE </td>
                <td>02-LEC Regular</td>
                <td>Kazim Sekeroglu</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 494 - TOPICS IN INFORMATION TECHNOLOGY </td>
                <td>01-LEC Regular</td>
                <td>Kazim Sekeroglu</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td>CMPS 534 - FUNDAMENTAL ALGORITHMS </td>
                <td>01-LEC Regular</td>
                <td>Quoc-Nam Tran</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 593 - SPECIAL TOPICS IN COMPUTER SCIENCE THEORY </td>
                <td>01-LEC Regular</td>
                <td>Patrick McDowell</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 594 - SPECIAL TOPICS IN INFORMATION TECHNOLOGY </td>
                <td>01-LEC Regular</td>
                <td>Kazim Sekeroglu</td>
                <button className="btn-join">Join Group</button>
              </tr>
              <tr>
                <td> CMPS 691 - ADVANCED SPECIAL TOPICS </td>
                <td>01-LEC Regular</td>
                <td>Kazim Sekeroglu</td>
                <button className="btn-join">Join Group</button>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Classes;
