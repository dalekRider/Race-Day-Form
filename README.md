# Race-Day-Form
<h2>Solution to Codecademy's Race Day Form project</h2>

This is a simple solution to <a href="https://www.codecademy.com/" target="_blank">Codecademy</a> Race Day form project. The project has the following requirements:

<ul>
  <li>Assign random number to entrants.</li>
    <ul>
      <li>Entrants who register early get a number between 0-1000.</li>
      <li>Entrants who register day of get a number between 1001-2000.</li>
    </ul>
   <li>Provide race time based on age and when entrant registered.</li>
     <ul>
      <li>Over 18 AND registered early: Race time = 9:30 AM.</li>
      <li>Over 18 OR registered early but not both: Race time = 11:30 AM.</li>
      <li>Under 18 AND did NOT register early: Race time = 12:30 AM.</li>
      <li>All others receive "Report to registration desk" message.</li>
    </ul> 
</ul>

This solution works, however I feel I may be missing something or possibly the options provided in the project only allow for a small amount of options to throw the "Report to registration desk" error. I have been able to get all the required responses to log into console. I will come back and look at this again to see if I can widen the range of input that causes the final else condition to trigger.

<strong>Johnathan Mercier</strong>

### Update 1/17/2018
Bug found: race numbers are only randomly assigned on page refresh. This script will be getting a major update which will address that but, will also provide more functionality and options. After going through my repos to prioritize and update them, I will be spending about a week per repo to polish and finalize each one. This one will be further down the list and may require more time and planning.
