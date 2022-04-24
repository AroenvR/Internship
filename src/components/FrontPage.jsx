import signature from '../img/Signature.png';
import ucllLogo from '../img/UCLL_logo.png';
import dnsLogo from '../img/DNS_logo.png';

const FrontPage = () => {

    return (
        <div id='front-page'>
            <img id='ucll-logo' src={ucllLogo} alt="Logo of UC Leuven Limburg"></img>

            <h1>Stageverslag</h1>

            <section>
                <div>
                    <p>Door:&nbsp;<img id='signature' src={signature} alt="Signature Aroen van Remmen"></img></p>
                    <p>Stageverslag ingediend voor het behalen van het diploma van <br/><span>Graduaat Programmeren</span></p>
                    <h3>Academiejaar 2021-2022</h3>
                </div>
                <div>
                    <p>Stagebegeleider: Steven Engels</p>
                    <p>Stagementor: Maarten Bosteels</p>
                    <p>Bedrijf: DNS Belgium</p>
                    <p>Locatie: Leuven</p>
                </div>
            </section>

            <img id='dns-logo' src={dnsLogo} alt="Logo of DNS Belgium"></img>
        </div>
    );
}

export default FrontPage;