import React from "react";
import Resume from "../../Assets/other/portfolioResume.pdf";

function EssentialLinks() {
    return (
        <ul className="list-unstyled">
            <li><a href={Resume}><button type="button" className="btn btn-dark rounded"><i
                className="far fa-file">&nbsp;</i>
                    Resume</button></a></li>      <br />
            <li><a href="https://github.com/itz-essie"><button type="button"
                className="btn btn-dark rounded"><i className="fab fa-github">&nbsp;</i>
                    Github</button></a></li>      <br />
            <li><a href="https://www.linkedin.com/in/esiena-ekwofia/"><button type="button"
                className="btn btn-dark rounded"><i className="fab fa-linkedin-in">&nbsp;</i>
                    LinkedIn</button></a></li>
        </ul>
    )
};

export default EssentialLinks;