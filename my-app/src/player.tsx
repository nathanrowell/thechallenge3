import React from 'react';

export class Player {
    firstName: string;
    lastName: string;
    skill: number;
    image: string;
    gender: string;

    constructor(firstName: string, lastName: string, skill: number, image: string, gender: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skill = skill;
        this.image = image;
        this.gender = gender;
    }
}

const player1 = new Player("Tori", "Deal", 6, "https://miro.medium.com/v2/resize:fit:800/1*ujqWWuAs8Wf5NXtx1DXQ0g.jpeg","F" );
const player2 = new Player("Derrick K", "Kosinkski", 6, "https://miro.medium.com/v2/resize:fit:800/1*Pd2kx0bs2wYPv83VHPyR0A.jpeg","M");
const player3 = new Player("Jordan", "Wiseley", 100, "https://miro.medium.com/v2/resize:fit:800/1*h1RT5ttHtAIRPaEC_XW7RQ.jpeg","M");
const player4 = new Player("CT", "Tamburello", 6, "https://miro.medium.com/v2/resize:fit:800/1*qa2a--OElkSiSuRgVCAb6w.jpeg","M");
const player5 = new Player("Hunter", "Barfield", 6, "https://miro.medium.com/v2/resize:fit:800/1*SUKxRF3oAGGduAO3oI6yBw.jpeg","M");
const player6 = new Player("Tony", "Raines", 6, "https://miro.medium.com/v2/resize:fit:800/1*E-UoVBAeiL-4pqIHKy-5Ew.jpeg","M");
const player7 = new Player("Camila", "Nakagawa", 6, "https://s17077.pcdn.co/wp-content/uploads/2020/02/camila-the-challenge.jpg","F");
const player8 = new Player("Cara Maria", "Sorbello", 6, "https://miro.medium.com/v2/resize:fit:1200/1*8mnAnvGlHc3Y1X8Xv1delg.jpeg","F");
const player9 = new Player("Jenna", "Compono", 6, "https://miro.medium.com/v2/resize:fit:1600/1*fSQGgp1fu9OXvGZk05ulzg.jpeg","F");
const player10 = new Player("Kailah", "Casillas", 6, "https://miro.medium.com/v2/resize:fit:473/1*i5l8M3pg205GtrEmYdbZrQ.png","F");
const player11 = new Player("Leroy", "Garrett", 10, "https://miro.medium.com/v2/resize:fit:800/1*9nt1FGurTnHkf8hu55s2TQ.jpeg","M");
const player12 = new Player("Dario", "Medrano", 10, "https://miro.medium.com/v2/resize:fit:1400/1*XdYh7NxNDCEpXAkt-arNxg.jpeg","M");
const player13 = new Player("Nelson", "Thomas", 6, "https://miro.medium.com/v2/resize:fit:800/1*JqKkNNkbuxseSQoXJkXlBA.jpeg","M");
const player14 = new Player("Cory", "Wharton", 6, "https://miro.medium.com/v2/resize:fit:800/1*9a2MudsPp9hXxbL-3PV7ew.jpeg","M");
const player15 = new Player("Britni", "Thornton", 6, "https://miro.medium.com/v2/resize:fit:800/1*uEGFlqstFdekdq2TEsnAjg.jpeg","F");
const player16 = new Player("Veronica", "Portillo", 6, "https://miro.medium.com/v2/resize:fit:800/1*obYnrFQiPsUhbDzA5bLvmw.jpeg","F");
const player17 = new Player("Jemmye", "Carroll", 6, "https://vevmo.com/sites/default/files/upload/19052005_225770481268746_4714473278834475008_n.jpg.jpg","F");
const player18 = new Player("Aneesa", "Ferrerira", 6, "https://miro.medium.com/v2/resize:fit:1600/1*Mjzf3ZSm5_8UZTY-M3txVQ.jpeg","F");
const player19 = new Player("Nicole", "Ramos", 6, "https://miro.medium.com/v2/resize:fit:800/1*V5fXlGlLxpQIRJEYEZizDA.jpeg","F");
const player20 = new Player("Marie", "Roda", 6, "https://miro.medium.com/v2/resize:fit:800/1*if0lexyEJLfq-qn66XXHpg.jpeg","F");
const player21 = new Player("Ammo", "Hall", 6, "https://s17077.pcdn.co/wp-content/uploads/2017/08/the-challenge-ammo.jpg","M");
const player22 = new Player("Derrick H", "Henry", 6, "https://miro.medium.com/v2/resize:fit:800/1*qiFzER-KNb5PXQCpzpKPkg.jpeg","M");
const player23 = new Player("Darrell", "Taylor", 6, "https://miro.medium.com/v2/resize:fit:800/1*NYRgzHs4BTHN5etHngGviA.jpeg","M");
const player24 = new Player("Briana", "LaCuesta", 6, "https://miro.medium.com/v2/resize:fit:1200/1*8uukOnevaAGuXkq3IY35hg.jpeg","F");
const player25 = new Player("LaToya", "Jackson", 6, "https://miro.medium.com/v2/resize:fit:800/1*sP7WivwkXJQZTL9j3_5Hig.jpeg","F");
const player26 = new Player("Amanda", "Garcia", 6, "https://miro.medium.com/v2/resize:fit:800/1*_ezRJcWbC7xCFnAbIfz6YA.jpeg","F");
const player27 = new Player("Simone", "Kelly", 6, "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/simone-kelly-dirty-30.jpg","F");
const player28 = new Player("Shane", "Raines", 6, "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/shane-raines-the-challenge.jpg","M");
const player29 = new Player("Devin", "Walker", 6, "https://miro.medium.com/v2/resize:fit:800/1*DvgTUZe7RUIrHkDkQmAmAw.jpeg","M");
const player30 = new Player("Bananas", "Devenanzio", 6, "https://miro.medium.com/v2/resize:fit:800/1*q5l227GqjX1J7ot-LYAB_w.jpeg","M");

export const malePlayers: Player[] = [player2, player3, player4, player5, player6, player11, player12, player13, player14,player21,player22,player23,player28,player29,player30];
export const femalePlayers: Player[] = [player1,player7, player8, player9, player10, player15, player16,player17,player18,player19,player20,player24,player25,player26,player27];

function ListNames(): JSX.Element {
    // Function to render players with images and names
    const renderPlayers = (players: Player[]) => {
        const playerGroups: JSX.Element[] = [];

        // Divide players into groups of 5
        for (let i = 0; i < players.length; i += 5) {
            const group = players.slice(i, i + 5).map((player, index) => (
                <div key={`${player.firstName}-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={player.image} alt={`${player.firstName} ${player.lastName}`} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                    <span>{player.firstName}</span>
                </div>
            ));
            playerGroups.push(
                <div key={`group-${i / 5}`} style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                    {group}
                </div>
            );
        }

        return playerGroups;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <h2>Male Players</h2>
                <div style={{ display: 'flex' }}>
                    {renderPlayers(malePlayers)}
                </div>
            </div>
            <div style={{ marginLeft: '30px' }}>
                <h2>Female Players</h2>
                <div style={{ display: 'flex' }}>
                    {renderPlayers(femalePlayers)}
                </div>
            </div>
        </div>
    );
}

export default ListNames;

