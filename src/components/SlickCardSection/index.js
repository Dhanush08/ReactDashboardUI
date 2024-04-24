import { useState } from "react";
import SlickStack from "../SlickStack";
import './index.css';

const set1 = [{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
}
];

const set2 = [
    {
        imgsrc: "set2pic1.jpg",
        title: "State of Markets",
        caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
    },
    {
        imgsrc: "set2pic2.jpg",
        title: "The Central Capex Surge",
        caption: "The last few years have seen a very substantial step up in capital"
    },
    {
        imgsrc: "set2pic3.jpg",
        title: "Direct Taxes and Business Cycle",
        caption: "The Share of direct taxes in total tax collections of the Central government is"
    },
    {
        imgsrc: "set2pic4.jpg",
        title: "Banking Monitor",
        caption: "Credit growth has remained broadly stable in recent weeks at just"
    },
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set2pic1.jpg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set2pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set2pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set2pic4.jpg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
},
{
    imgsrc: "set1pic1.jpeg",
    title: "State of Markets",
    caption: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January"
},
{
    imgsrc: "set1pic2.jpg",
    title: "The Central Capex Surge",
    caption: "The last few years have seen a very substantial step up in capital"
},
{
    imgsrc: "set1pic3.jpg",
    title: "Direct Taxes and Business Cycle",
    caption: "The Share of direct taxes in total tax collections of the Central government is"
},
{
    imgsrc: "set1pic4.jpeg",
    title: "Banking Monitor",
    caption: "Credit growth has remained broadly stable in recent weeks at just"
}
];

const SlickCardSection = () => {
    const [open, setStatus] = useState(false);

    const changeStatus = () => {
        setStatus((prevState) => !prevState)
    }

    return (
        <>
            <div className="slick-cards-container">
                <SlickStack data={set1} />
                <br />
                <br />
                {open ?
                    <div>
                        <SlickStack data={set2} />
                        <br />
                        <br />
                    </div>
                     : null}
                <button className="view-more-button" onClick={changeStatus}>
                    {open ? "View Less" : "View More"}
                </button>
            </div>
        </>
    );
}

export default SlickCardSection;