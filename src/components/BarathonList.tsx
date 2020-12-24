import React, {useState} from "react";
import {IBarathon, IPub} from "../types/api";
import BarathonThumb from './BarathonThumb'

interface IProps {
    pubs: IPub[];
    barathons: IBarathon[];
}

const BarathonList = ({ barathons, pubs}: IProps): JSX.Element => {
    return (
        <>
            {barathons.map((barathon: IBarathon) => {
                return (
                  <BarathonThumb barathon={barathon} pubs={pubs} />
                );
            })}
        </>
    );
};

export default BarathonList;