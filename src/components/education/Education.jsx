import React, { useState } from "react";
import "./Education.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./Study";

const Education = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Education</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id,img, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <img src={img}  className="logo" />
                                <br />
                                <br />
                                <h2 className="tab__panel-title">
                                     {company} @ {title} 
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Education;