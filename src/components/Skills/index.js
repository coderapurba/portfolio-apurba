import { useState } from "react";
import ReactPaginate from "react-paginate";

function Skills({ skills, title, subtitle }) {
  const [itemsPerPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = skills.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(skills.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % skills.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section
        id="skills"
        className="section pp-scrollable d-flex align-items-center position-absolute"
      >
        <div className="intro">
          <div className="scroll-wrap">
            <div className="container">
              <div className="row align-items-center">
                {/* Left side images */}
                {/* <div className="col-lg-5">
                  <div className="position-relative">
                    <div className="photo-icon photo-icon-1">
                      <img alt="" className="w-100" src="img/100x100.jpg" />
                    </div>
                    <div className="photo-icon photo-icon-2">
                      <img alt="" className="w-100" src="img/80x80.jpg" />
                    </div>
                    <div className="photo-icon photo-icon-3">
                      <img alt="" className="w-100" src="img/100x100-2.jpg" />
                    </div>
                    <img
                      alt=""
                      className="border-radius w-100"
                      src="img/skills.jpg"
                    />
                  </div>
                </div> */}
                {/* Right side skills details */}
                {/* <div className="mt-5 mt-lg-0 col-lg-5 offset-lg-1">
                  <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                  <p
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  ></p>
                  {skills?.map(({ title, skills }) => (
                    <div className="exp_skills" key={title}>
                      <h4>{title}</h4>
                      <div className="mb-4 pt-2 skills_wrapper">
                        {skills?.map((skill, i) => (
                          <div className="skill-item" key={i}>
                            <h6 className="mt-0">{skill}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div> */}
                {/* Edited Right side */}
                <div className="mt-5 mt-lg-0 offset-lg-1">
                  <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                  <p
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  ></p>
                  {currentItems?.map(({ title, skills }) => (
                    <div className="exp_skills" key={title}>
                      <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
                      <div className="mb-4 pt-2 skills_wrapper">
                        {skills?.map((skill, i) => (
                          <div className="all-skill" key={i}>
                            <div className="skill-item">
                              <img src={skill.img} alt="logo" />
                              <h6 className="">{skill.percent}</h6>
                            </div>
                            <h6>{skill.title}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Paginate counter */}
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="paginate-ul"
                    pageClassName="paginate-li"
                    pageLinkClassName="paginate-a"
                    activeClassName="paginate-active"
                    activeLinkClassName="paginate-link-a"
                    // className="paginate-prev-next"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
