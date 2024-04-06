import React, { useEffect, useState } from "react";
import { femalePlayers, malePlayers, Player } from './player.tsx';

export function Purge1(): JSX.Element {
    const [selectedMaleNamesPart1, setSelectedMaleNamesPart1] = useState<string[]>([]);
    const [selectedFemaleNamesPart1, setSelectedFemaleNamesPart1] = useState<string[]>([]);
    const [selectedMaleNamesPart2, setSelectedMaleNamesPart2] = useState<string[]>([]);
    const [selectedFemaleNamesPart2, setSelectedFemaleNamesPart2] = useState<string[]>([]);
    const [selectedMaleNamesPart3, setSelectedMaleNamesPart3] = useState<string>('');
    const [selectedFemaleNamesPart3, setSelectedFemaleNamesPart3] = useState<string>('');
    const [remainingMaleNamesBefore, setRemainingMaleNamesBefore] = useState<string[]>([]);
    const [remainingFemaleNamesBefore, setRemainingFemaleNamesBefore] = useState<string[]>([]);
    const [remainingMaleNamesAfter, setRemainingMaleNamesAfter] = useState<string[]>([]);
    const [remainingFemaleNamesAfter, setRemainingFemaleNamesAfter] = useState<string[]>([]);
    const [eliminatedMales, setEliminatedMales] = useState<string[]>([]);
    const [eliminatedFemales, setEliminatedFemales] = useState<string[]>([]);
    const [savedMaleName, setSavedMaleName] = useState<string>('');
    const [savedFemaleName, setSavedFemaleName] = useState<string>('');

    useEffect(() => {
        const getRandomNames = (names: string[], count: number): string[] => {
            const selectedNames: string[] = [];
            for (let i = 0; i < count; i++) {
                const randomIndex = Math.floor(Math.random() * names.length);
                const selectedName = names[randomIndex];
                selectedNames.push(selectedName);
                // Remove selected name from the list
                names = names.filter(name => name !== selectedName);
            }
            return selectedNames;
        };

        // Select names for Part 1
        const part1MaleNames = getRandomNames(malePlayers.flatMap(player => Array(player.skill).fill(player.firstName)), 5);
        const part1FemaleNames = getRandomNames(femalePlayers.flatMap(player => Array(player.skill).fill(player.firstName)), 5);

        setSelectedMaleNamesPart1(part1MaleNames);
        setSelectedFemaleNamesPart1(part1FemaleNames);

        // Select names for Part 2 from remaining list after excluding Part 1 names
        const remainingMaleNamesAfterPart1 = malePlayers.flatMap(player => Array(player.skill).fill(player.firstName)).filter(name => !part1MaleNames.includes(name));
        const remainingFemaleNamesAfterPart1 = femalePlayers.flatMap(player => Array(player.skill).fill(player.firstName)).filter(name => !part1FemaleNames.includes(name));

        const part2MaleNames = getRandomNames(remainingMaleNamesAfterPart1, 5);
        const part2FemaleNames = getRandomNames(remainingFemaleNamesAfterPart1, 5);

        setSelectedMaleNamesPart2(part2MaleNames);
        setSelectedFemaleNamesPart2(part2FemaleNames);

        // Set the remaining names for both male and female after excluding Part 1 names
        const remainingMaleNamesBeforePart3 = Array.from(new Set(remainingMaleNamesAfterPart1.filter(name => !part2MaleNames.includes(name))));
        const remainingFemaleNamesBeforePart3 = Array.from(new Set(remainingFemaleNamesAfterPart1.filter(name => !part2FemaleNames.includes(name))));
        
        setRemainingMaleNamesBefore(remainingMaleNamesBeforePart3);
        setRemainingFemaleNamesBefore(remainingFemaleNamesBeforePart3);
        
        // Part 3: Randomly select one man and one woman from the remaining players before Part 3
        const part3MaleName = getRandomNames(remainingMaleNamesBeforePart3, 1)[0];
        const part3FemaleName = getRandomNames(remainingFemaleNamesBeforePart3, 1)[0];

        setSelectedMaleNamesPart3(part3MaleName);
        setSelectedFemaleNamesPart3(part3FemaleName);

        // Set the remaining names for both male and female after Part 3
        const remainingMaleNamesAfterPart3 = remainingMaleNamesBeforePart3.filter(name => name !== part3MaleName);
        const remainingFemaleNamesAfterPart3 = remainingFemaleNamesBeforePart3.filter(name => name !== part3FemaleName);

        setRemainingMaleNamesAfter(remainingMaleNamesAfterPart3);
        setRemainingFemaleNamesAfter(remainingFemaleNamesAfterPart3);

        // Set saved male and female names

    const savedMaleName = getRandomNames(remainingMaleNamesAfterPart3, 1)[0];
    const savedFemaleName = getRandomNames(remainingFemaleNamesAfterPart3, 1)[0];

// Set eliminated males and females
    const eliminatedMales = remainingMaleNamesAfterPart3.filter(name => name !== savedMaleName);
    const eliminatedFemales = remainingFemaleNamesAfterPart3.filter(name => name !== savedFemaleName);

    setSavedMaleName(savedMaleName);
    setSavedFemaleName(savedFemaleName);
    setEliminatedMales(eliminatedMales);
    setEliminatedFemales(eliminatedFemales);
        
    }, []);

    return (
        <div>
            <h2>Challenge: Purge 1</h2>
            <div>
                <h3>Part 1 Winners:</h3>
                <p>{selectedMaleNamesPart1.join(', ')}</p>
                <p>{selectedFemaleNamesPart1.join(', ')}</p>
                <h3>Part 2 Winners:</h3>
                <p>{selectedMaleNamesPart2.join(', ')}</p>
                <p>Female Winners of Part 2: {selectedFemaleNamesPart2.join(', ')}</p>
                <h3>Remaining Male Names:</h3>
                <p>{remainingMaleNamesBefore.join(', ')}</p>
                <h3>Remaining Female Names:</h3>
                <p>{remainingFemaleNamesBefore.join(', ')}</p>
                <h3>Part 3 Winners:</h3>
                <p>{selectedMaleNamesPart3}</p>
                <p>{selectedFemaleNamesPart3}</p>
                <h3>Remaining Male Names:</h3>
                <p>{remainingMaleNamesAfter.join(', ')}</p>
                <h3>Remaining Female Names:</h3>
                <p>{remainingFemaleNamesAfter.join(', ')}</p>
                <h3>Part 3 Winners Saved:</h3>
                <p>{selectedMaleNamesPart3} has saved {savedMaleName}</p>
                <p>{selectedFemaleNamesPart3} has saved {savedFemaleName}</p>
                <h3>Eliminated Males:</h3>
                <p>{eliminatedMales.join(', ')}</p>
                <h3>Eliminated Females:</h3>
                <p>{eliminatedFemales.join(', ')}</p>
                
            </div>
        </div>
    );
}

export default Purge1;