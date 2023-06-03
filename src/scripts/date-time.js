// Calculate time spent at current job in years
const currentJob = document.querySelector('#current-job')
const currentJobStartDate = Date.parse(currentJob.querySelector('time').getAttribute('datetime'))
const timeSpentMs = Date.now() - currentJobStartDate
const timeSpentYears = (timeSpentMs / 1000 / 60 / 60 / 24 / 365).toFixed(1)

// Create element containing translation of "years"
const yearsElement = document.createElement('span')
yearsElement.setAttribute('data-translate', 'years')
yearsElement.textContent = 'Years'

// Create element containing the caluclated time spent at current job
const timeSpentYearsElement = document.createElement('span')
timeSpentYearsElement.id = 'current-job-duration'
timeSpentYearsElement.textContent = timeSpentYears.toString().concat(' ')
timeSpentYearsElement.append(yearsElement)

// Insert the time spent element after the "today" element
currentJob.querySelector('time[data-translate="today"]').after(timeSpentYearsElement)
