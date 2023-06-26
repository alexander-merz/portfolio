// Calculate time spent at current job in years
const currentJob = document.querySelector('#current-job')
const currentJobStartDate = Date.parse(currentJob.querySelector('time').getAttribute('datetime'))
const timeSpentMs = Date.now() - currentJobStartDate
const timeSpentMonths = Math.round(timeSpentMs / 1000 / 60 / 60 / 24 / 30.4375)

const years = Math.floor(timeSpentMonths / 12)
const months = timeSpentMonths % 12

// Create element containing the calculated time spent at current job
const timeSpentYearsElement = document.createElement('span')
timeSpentYearsElement.id = 'current-job-duration'

// Create element containing translation of "months"
const monthsElement = document.createElement('span')
monthsElement.setAttribute('data-translate', months > 1 ? 'months' : 'month')

if (years > 0) {
  // Create element containing translation of "years"
  const yearsElement = document.createElement('span')
  yearsElement.setAttribute('data-translate', years > 1 ? 'years' : 'year')

  // Create element containing translation of "and"
  const andElement = document.createElement('span')
  andElement.setAttribute('data-translate', 'and')

  timeSpentYearsElement.append(years.toString(), ' ', yearsElement, ' ', andElement, ' ')
}

timeSpentYearsElement.append(months.toString(), ' ', monthsElement)

// Insert the time spent element after the "today" element
currentJob.querySelector('time[data-translate="today"]').after(timeSpentYearsElement)
