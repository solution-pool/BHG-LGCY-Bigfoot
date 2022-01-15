import './Team.scss';

import photo1 from '../../assets/images/team/Bigfoot Zero.png';
import photo2 from '../../assets/images/team/Krazy_ND.png';
import photo3 from '../../assets/images/team/Ucumar.png';
import photo4 from '../../assets/images/team/TheDangerDay.png';
import photo5 from '../../assets/images/team/KaizenJay.png';
import photo6 from '../../assets/images/team/Chadders.png';
import photo7 from '../../assets/images/team/J Chillin.png';
import photo8 from '../../assets/images/team/G Chillin.png';
import photo9 from '../../assets/images/team/C Hunter.png';
import photo10 from '../../assets/images/team/Dreamy Geek.png';
import photo11 from '../../assets/images/team/Dmitri.png';

import { ENVS } from "../../helpers/configurations/index"

export const Team = () => {
    const teamInfo = [
        {
            name: 'Bigfoot Zero',
            position: 'Creator/ Project Lead',
            address: 'TestAddress',
            photo: photo1,
            color: '#123456',
        },
        {
            name: 'Krazy_ND',
            position: 'VP/Full stack Dev',
            address: 'TestAddress',
            photo: photo2,
            color: '#123456',
        },
        {
            name: 'Ucumar',
            position: 'Web/Back End Dev',
            address: 'TestAddress',
            photo: photo3,
            color: '#123456',
        },
        {
            name: 'TheDangerDay',
            position: 'Partnership/ LGCY Liason',
            address: 'TestAddress',
            photo: photo4,
            color: '#123456',
        },
        {
            name: 'KaizenJay',
            position: 'Marketing',
            address: 'TestAddress',
            photo: photo5,
            color: '#123456',
        },
        {
            name: 'Chadders',
            position: 'Marketing',
            address: 'TestAddress',
            photo: photo6,
            color: '#123456',
        },
        {
            name: 'JChillin',
            position: 'Promoter',
            address: 'TestAddress',
            photo: photo7,
            color: '#123456',
        },
        {
            name: 'GChillin',
            position: 'Creative Input',
            address: 'TestAddress',
            photo: photo8,
            color: '#123456',
        },
        {
            name: 'Chris Hunter',
            position: 'Artist',
            address: 'TestAddress',
            photo: photo9,
            color: '#123456',
        },
        {
            name: 'Dreamy Geek',
            position: 'Programmer',
            address: 'TestAddress',
            photo: photo10,
            color: '#123456',
        },
        {
            name: 'Dmitrii',
            position: 'dApp Programmer',
            address: 'TestAddress',
            photo: photo11,
            color: '#123456',
        },
    ]

    const scanUrl = ENVS.CHAIN_ID == "0x4" ? "https://rinkeby.etherscan.io/address/" : "https://etherscan.io/address/";

    return (
        <section className="team contentWrapper" id="team">
            <div className="team__title">
                <h1 className="section__title">
                    THE TEAM
                </h1>
            </div>
            <div className="team__people">
                {
                    teamInfo.map(( item, index ) => (
                        <div className="team__people__member" key={index}>
                            <div className="team__people__member__photo">
                                <img alt="img" src={ item.photo }></img>
                            </div>
        
                            <div className="team__people__member__info" style={{ backgroundColor: item.color }}>
                                <p>{ item.name }</p>
                                <p>{ item.position }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="team__contractAddress">
                <span>VERIFIED SMART CONTRACT ADDRESS: &nbsp;</span>
                {/* <a href={`${scanUrl}/${ENVS.CONTRACT_ADDRESS}`}>
                    {ENVS.CONTRACT_ADDRESS}
                </a> */}
                Coming soon...
            </div>
        </section>
    )
}

export default Team;