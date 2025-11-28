import Card from "./components/card";

const App = () => {

  const arr = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer - Frontend",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour", // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.wJuaaX-MmaXYVa3S4b_XyAHaFj?w=866&h=650&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "1 day ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Gurgaon, India"
  }
];

  return (
    <div className="parent">
     {arr.map(function(elem,idx){

      return <div key={idx}>
        <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      </div>
     })}
     
    </div>
  );
};
export default App;
