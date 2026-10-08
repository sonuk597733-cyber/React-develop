import Card from './components/Card';
import './App.css';
const App = () => {
const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Hyderabad, India",
    link: "https://careers.microsoft.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bangalore, India",
    link: "https://careers.google.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag: "Full Time",
    tag2: "Entry Level",
    pay: "$38/hour",
    location: "Bangalore, India",
    link: "https://www.amazon.jobs/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Hyderabad, India",
    link: "https://jobs.apple.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Bangalore, India",
    link: "https://www.metacareers.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India",
    link: "https://careers.adobe.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    name: "IBM",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$37/hour",
    location: "Pune, India",
    link: "https://www.ibm.com/careers"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Pune, India",
    link: "https://www.nvidia.com/en-us/about-nvidia/careers/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    name: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Bangalore, India",
    link: "https://careers.salesforce.com/"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    name: "Intel",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag: "Part Time",
    tag2: "Entry Level",
    pay: "$32/hour",
    location: "Bangalore, India",
    link: "https://jobs.intel.com/"
  }
];
console.log(jobs)
  return (
  <div className="parent">
    {jobs.map((elem,idx)=>{
      return (
       
        <Card 
        brandLogo={elem.brandLogo}
        name = {elem.name}
        datePosted ={elem.datePosted}
          post={elem.post}
          tag2={elem.tag2}
          tag={elem.tag}
          location={elem.location} 
          pay={elem.pay}
        />
      )
    })}
  </div>
  )
}

export default App
