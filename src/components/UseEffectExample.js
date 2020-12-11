import React, { useEffect } from "react";

const trackPageView = () => {
    // ...
};

const UseEffectExample = ({ id, ...props }) => {
    useEffect(() => {
        trackPageView("Homepage");
    }, []);

    useEffect(() => {
        trackPageView("Homepage");
    });

    useEffect(() => {
        trackPageView("Homepage");
    }, [id]);

    return <div>Homepage</div>;
};

export default UseEffectExample;
