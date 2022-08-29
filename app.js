console.log("Starting:");
let today = new Date();
let date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();

const CodingNinjas_API_ENDPOINT = `https://api.codingninjas.com/api/v3/public_section/potd/problem_list?date=${date}`;
const GFG_API_ENDPOINT =
  "https://practiceapi.geeksforgeeks.org/api/v1/problems-of-day/problem/today/";



/*Sync GFG daily coding challenge to Todoist*/

fetch(GFG_API_ENDPOINT)
    .then(data => data.json())
    .then(GFG =>{
        const GFG_url = GFG.problem_url;
        let GFG_name = GFG.problem_name;
        const GFG_difficulty = GFG.difficulty;
        const GFG_element = document.getElementById('gfg_potd');
        GFG_element.innerHTML = `${GFG_name} [ ${GFG_difficulty} ]`;
        GFG_element.href = GFG_url;
  

    });

/*Sync NINJAs daily coding challenge to Todoist*/

fetch(CodingNinjas_API_ENDPOINT)
    .then(data => data.json())
    .then(ninja =>{
        let ninja_name = ninja.data.details.MODERATE.problem.name;
        const ninja_difficulty = ninja.data.details.MODERATE.problem.difficulty;
        const ninja_element = document.getElementById('ninjas_potd');
        ninja_element.innerHTML = `${ninja_name} [ ${ninja_difficulty} ]`;
        ninja_element.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty}`
        
        let ninja_name2 = ninja.data.details.HARD.problem.name;
        const ninja_difficulty2 = ninja.data.details.HARD.problem.difficulty;
        const ninja_element2 = document.getElementById('ninjas_potd2');
        ninja_element2.innerHTML = `${ninja_name2} [ ${ninja_difficulty2} ]`;
        ninja_element2.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty2}`


    });

//syncLeetCodeCodingChallenge

    const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`;


/*Sync LeetCode daily coding challenge to Todoist*/

// getLeetCode = async()=>{
//     const init = {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "Host": "leetcode.com", "Origin": "https://leetcode.com", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Dest": "empty"  },
//         body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY })
        
        
//       };

//       try{
//         const fetchResponse = await fetch(LEETCODE_API_ENDPOINT, init);
//         const data = await fetchResponse.json();
//         console.log(data)
//         return data;
//       }
//       catch(e){
//         return e;
//       }
// }

// getLeetCode();



// const syncLeetCodeCodingChallenge = async () => {
//   const question = await fetchDailyCodingChallenge();
//   console.log("LeetCode: POTD");

//   const questionInfo = question.data.activeDailyCodingChallengeQuestion;


//   const questionTitle = questionInfo.question.title;
//   const questionDifficulty = questionInfo.question.difficulty;
//   const questionLink = `https://leetcode.com${questionInfo.link}`;
//   console.log("the problem of the day for", questionInfo.date);
//   console.log("problem name:", questionInfo.question.title);
//   console.log("problem description:", questionInfo.question.difficulty);
//   console.log("problem link: leetcode.com" + questionInfo.link);
//   console.log("***********")
//   console.log("***********")
//   console.log("   ");


// };

// const fetchDailyCodingChallenge = async () => {
//   console.log(`Fetching daily coding challenge from LeetCode API.`);

//   const init = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
//   };

//   const response = await fetch(LEETCODE_API_ENDPOINT, init);

//   return response.json();
// };

// syncLeetCodeCodingChallenge();