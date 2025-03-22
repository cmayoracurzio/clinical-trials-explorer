import { z } from "zod"

import { CLINICAL_TRIALS_API_ENUMS } from "@/lib/constants"

// Reusable schemas
const agencyClassEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.AgencyClass)
const orgStudyIdTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.OrgStudyIdType)
const secondaryIdTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.SecondaryIdType)
const statusEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.Status)
const expandedAccessStatusEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.ExpandedAccessStatus
)
const dateStructSchema = z.object({
  date: z.string().describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  type: z.enum(CLINICAL_TRIALS_API_ENUMS.DateType),
})
const responsiblePartyTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.ResponsiblePartyType
)
const studyTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.StudyType)
const phaseEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.Phase)
const designAllocationEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.DesignAllocation)
const designInterventionModelEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.InterventionalAssignment
)
const primaryPurposeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.PrimaryPurpose)
const observationalModelEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.ObservationalModel
)
const timePerspectiveEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.TimePerspective)
const designMaskingEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.DesignMasking)
const whoMaskedEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.WhoMasked)
const bioSpecRetentionEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.BioSpecRetention)
const enrollmentInfoTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.EnrollmentType)
const sexEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.Sex)
const samplingMethodEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.SamplingMethod)
const armGroupTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.ArmGroupType)
const interventionTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.InterventionType)
const standardAgeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.StandardAge)
const contactRoleEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.ContactRole)
const officialRoleEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.OfficialRole)
const recruitmentStatusEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.RecruitmentStatus
)
const referenceTypeEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.ReferenceType)
const ipdSharingEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.IpdSharing)
const ipdSharingInfoTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.IpdSharingInfoType
)
const measureParamEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.MeasureParam)
const measureDispersionTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.MeasureDispersionType
)
const outcomeMeasureTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.OutcomeMeasureType
)
const reportingStatusEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.ReportingStatus)
const analysisDispersionTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.AnalysisDispersionType
)
const confidenceIntervalNumSidesEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.ConfidenceIntervalNumSides
)
const nonInferiorityTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.NonInferiorityType
)
const eventAssessmentEnum = z.enum(CLINICAL_TRIALS_API_ENUMS.EventAssessment)
const agreementRestrictionTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.AgreementRestrictionType
)
const unpostedEventTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.UnpostedEventType
)
const violationEventTypeEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.ViolationEventType
)
const browseLeafRelevanceEnum = z.enum(
  CLINICAL_TRIALS_API_ENUMS.BrowseLeafRelevance
)

// ==================== PROTOCOL SECTION ====================

// -------------------- Identification module --------------------
const identificationModuleSchema = z.object({
  nctId: z.string(),
  nctIdAliases: z.array(z.string()),
  orgStudyIdInfo: z
    .object({
      id: z.string(),
      type: orgStudyIdTypeEnum,
      link: z.string(),
    })
    .partial(),
  secondaryIdInfos: z.array(
    z
      .object({
        id: z.string(),
        type: secondaryIdTypeEnum,
      })
      .partial()
  ),
  briefTitle: z.string(),
  officialTitle: z.string(),
  acronym: z.string(),
  organization: z
    .object({
      fullName: z.string(),
      class: agencyClassEnum,
    })
    .partial(),
})

// -------------------- Status module --------------------

const statusModuleSchema = z.object({
  statusVerifiedDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  overallStatus: statusEnum,
  lastKnownStatus: statusEnum,
  delayedPosting: z.boolean(),
  whyStopped: z.string(),
  expandedAccessInfo: z
    .object({
      hasExpandedAccess: z.boolean(),
      nctId: z.string(),
      statusForNctId: expandedAccessStatusEnum,
    })
    .partial(),
  startDateStruct: dateStructSchema.partial(),
  primaryCompletionDateStruct: dateStructSchema.partial(),
  completionDateStruct: dateStructSchema.partial(),
  studyFirstSubmitDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  studyFirstSubmitQcDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  studyFirstPostDateStruct: dateStructSchema.partial(),
  resultsFirstSubmitDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  resultsFirstSubmitQcDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  resultsFirstPostDateStruct: dateStructSchema.partial(),
  dispFirstSubmitDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  dispFirstSubmitQcDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  dispFirstPostDateStruct: dateStructSchema.partial(),
  lastUpdateSubmitDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  lastUpdatePostDateStruct: dateStructSchema.partial(),
})

// -------------------- Sponsor/Collaborators module --------------------

export const sponsorCollaboratorsModuleSchema = z.object({
  responsibleParty: z
    .object({
      type: responsiblePartyTypeEnum,
      investigatorFullName: z.string(),
      investigatorTitle: z.string(),
      investigatorAffiliation: z.string(),
      oldNameTitle: z.string(),
      oldOrganization: z.string(),
    })
    .partial(),
  leadSponsor: z
    .object({
      name: z.string(),
      class: agencyClassEnum,
    })
    .partial(),
  collaborators: z.array(
    z
      .object({
        name: z.string(),
        class: agencyClassEnum,
      })
      .partial()
  ),
})

// -------------------- Oversight module --------------------
const oversightModuleSchema = z.object({
  oversightHasDmc: z.boolean(),
  isFdaRegulatedDrug: z.boolean(),
  isFdaRegulatedDevice: z.boolean(),
  isUnapprovedDevice: z.boolean(),
  isPpsd: z.boolean(),
  isUsExport: z.boolean(),
  fdaaa801Violation: z.boolean(),
})

// -------------------- Description module --------------------
const descriptionModuleSchema = z.object({
  briefSummary: z.string(),
  detailedDescription: z.string(),
})

// -------------------- Conditions module --------------------
const conditionsModuleSchema = z.object({
  conditions: z.array(z.string()),
  keywords: z.array(z.string()),
})

// -------------------- Design module --------------------
const designModuleSchema = z.object({
  studyType: studyTypeEnum,
  nPtrsToThisExpAccNctId: z.number(),
  expandedAccessTypes: z
    .object({
      individual: z.boolean(),
      intermediate: z.boolean(),
      treatment: z.boolean(),
    })
    .partial(),
  patientRegistry: z.boolean(),
  targetDuration: z
    .string()
    .describe(
      "Pattern: ^d+ (Year|Years|Month|Months|Week|Weeks|Day|Days|Hour|Hours|Minute|Minutes)$"
    ),
  phases: z.array(phaseEnum),
  designInfo: z
    .object({
      allocation: designAllocationEnum,
      interventionModel: designInterventionModelEnum,
      interventionModelDescription: z.string(),
      primaryPurpose: primaryPurposeEnum,
      observationalModel: observationalModelEnum,
      timePerspective: timePerspectiveEnum,
      maskingInfo: z
        .object({
          masking: designMaskingEnum,
          maskingDescription: z.string(),
          whoMasked: z.array(whoMaskedEnum),
        })
        .partial(),
    })
    .partial(),
  bioSpec: z
    .object({
      retention: bioSpecRetentionEnum,
      description: z.string(),
    })
    .partial(),
  enrollmentInfo: z
    .object({
      count: z.number(),
      type: enrollmentInfoTypeEnum,
    })
    .partial(),
})

// -------------------- Arms/Interventions module --------------------
const armGroupSchema = z.object({
  label: z.string(),
  type: armGroupTypeEnum,
  description: z.string(),
  interventionNames: z.array(z.string()),
})

const interventionSchema = z.object({
  type: interventionTypeEnum,
  name: z.string(),
  description: z.string(),
  armsGroupLabels: z.array(z.string()),
  otherNames: z.array(z.string()),
})

const armsInterventionsModuleSchema = z.object({
  armGroups: z.array(armGroupSchema.partial()),
  interventions: z.array(interventionSchema.partial()),
})

// -------------------- Outcomes module --------------------
const outcomeSchema = z.object({
  measure: z.string(),
  description: z.string(),
  timeFrame: z.string(),
})

const outcomesModuleSchema = z.object({
  primaryOutcomes: z.array(outcomeSchema.partial()),
  secondaryOutcomes: z.array(outcomeSchema.partial()),
  otherOutcomes: z.array(outcomeSchema.partial()),
})

// -------------------- Eligibility module --------------------
const eligibilityModuleSchema = z.object({
  eligibilityCriteria: z.string(),
  healthyVolunteers: z.boolean(),
  sex: sexEnum,
  genderBased: z.boolean(),
  genderDescription: z.string(),
  minimumAge: z
    .string()
    .describe(
      "Pattern: ^d+ (Year|Years|Month|Months|Week|Weeks|Day|Days|Hour|Hours|Minute|Minutes)$"
    ),
  maximumAge: z
    .string()
    .describe(
      "Pattern: ^d+ (Year|Years|Month|Months|Week|Weeks|Day|Days|Hour|Hours|Minute|Minutes)$"
    ),
  stdAges: z.array(standardAgeEnum),
  studyPopulation: z.string(),
  samplingMethod: samplingMethodEnum,
})

// -------------------- Contacts/Locations module --------------------
const contactSchema = z.object({
  name: z.string(),
  role: contactRoleEnum,
  phone: z.string(),
  phoneExt: z.string(),
  email: z.string(),
})

const overallOfficialSchema = z.object({
  name: z.string(),
  affiliation: z.string(),
  role: officialRoleEnum,
})

const locationSchema = z.object({
  facility: z.string(),
  status: recruitmentStatusEnum,
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  contacts: z.array(contactSchema.partial()),
  countryCode: z.string(),
  geoPoint: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
})

const contactsLocationsModuleSchema = z.object({
  centralContacts: z.array(contactSchema.partial()),
  overallOfficials: z.array(overallOfficialSchema.partial()),
  locations: z.array(locationSchema.partial()),
})

// -------------------- References module --------------------
const retractionSchema = z.object({
  pmid: z.string(),
  source: z.string(),
})

const referenceSchema = z.object({
  pmid: z.string(),
  type: referenceTypeEnum,
  citation: z.string(),
  retractions: z.array(retractionSchema.partial()),
})

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
})

const availIpdSchema = z.object({
  id: z.string(),
  type: z.string(),
  url: z.string(),
  comment: z.string(),
})

const referencesModuleSchema = z.object({
  references: z.array(referenceSchema.partial()),
  seeAlsoLinks: z.array(linkSchema.partial()),
  availIpds: z.array(availIpdSchema.partial()),
})

// -------------------- IPD Sharing Statement module --------------------
const ipdSharingStatementModuleSchema = z.object({
  ipdSharing: ipdSharingEnum,
  description: z.string(),
  infoTypes: z.array(ipdSharingInfoTypeEnum),
  timeFrame: z.string(),
  accessCriteria: z.string(),
  url: z.string(),
})

const protocolSectionSchema = z.object({
  identificationModule: identificationModuleSchema.partial(),
  statusModule: statusModuleSchema.partial(),
  sponsorCollaboratorsModule: sponsorCollaboratorsModuleSchema.partial(),
  oversightModule: oversightModuleSchema.partial(),
  descriptionModule: descriptionModuleSchema.partial(),
  conditionsModule: conditionsModuleSchema.partial(),
  designModule: designModuleSchema.partial(),
  armsInterventionsModule: armsInterventionsModuleSchema.partial(),
  outcomesModule: outcomesModuleSchema.partial(),
  eligibilityModule: eligibilityModuleSchema.partial(),
  contactsLocationsModule: contactsLocationsModuleSchema.partial(),
  referencesModule: referencesModuleSchema.partial(),
  ipdSharingStatementModule: ipdSharingStatementModuleSchema.partial(),
})

// ==================== RESULTS SECTION ====================

// -------------------- Participant Flow module --------------------

const groupSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})

const achievementSchema = z.object({
  groupId: z.string(),
  comment: z.string(),
  numSubjects: z.string(),
  numUnits: z.string(),
})

const milestoneSchema = z.object({
  type: z.string(),
  comment: z.string(),
  achievements: z.array(achievementSchema.partial()),
})

const periodSchema = z.object({
  title: z.string(),
  milestones: z.array(milestoneSchema.partial()),
})

const participantFlowModuleSchema = z.object({
  preAssignmentDetails: z.string(),
  recruitmentDetails: z.string(),
  typeUnitsAnalyzed: z.string(),
  groups: z.array(groupSchema.partial()),
  periods: z.array(periodSchema.partial()),
})

// -------------------- Baseline Characteristics module --------------------
const denomCountSchema = z.object({
  groupId: z.string(),
  value: z.string(),
})

const denomSchema = z.object({
  units: z.string(),
  counts: z.array(denomCountSchema.partial()),
})

const measurementSchema = z.object({
  groupId: z.string(),
  value: z.string(),
  spread: z.string(),
  lowerLimit: z.string(),
  upperLimit: z.string(),
  comment: z.string(),
})

const categorySchema = z.object({
  title: z.string(),
  measurements: z.array(measurementSchema.partial()),
})

const classSchema = z.object({
  title: z.string(),
  denoms: z.array(denomSchema.partial()),
  categories: z.array(categorySchema.partial()),
})

const measureSchema = z.object({
  title: z.string(),
  description: z.string(),
  populationDescription: z.string(),
  paramType: measureParamEnum,
  dispersionType: measureDispersionTypeEnum,
  unitOfMeasure: z.string(),
  calculatePct: z.boolean(),
  denomUnitsSelected: z.string(),
  denoms: z.array(denomSchema.partial()),
  classes: z.array(classSchema.partial()),
})

const baselineCharacteristicsModuleSchema = z.object({
  populationDescription: z.string(),
  typeUnitsAnalyzed: z.string(),
  groups: z.array(groupSchema.partial()),
  denoms: z.array(denomSchema.partial()),
  measures: z.array(measureSchema.partial()),
})

// -------------------- Outcome Measures module --------------------
const analysisSchema = z.object({
  paramType: z.string(),
  paramValue: z.string(),
  dispersionType: analysisDispersionTypeEnum,
  dispersionValue: z.string(),
  statisticalMethod: z.string(),
  statisticalComment: z.string(),
  pValue: z.string(),
  pValueComment: z.string(),
  ciNumSides: confidenceIntervalNumSidesEnum,
  ciPctValue: z.string(),
  ciLowerLimit: z.string(),
  ciUpperLimit: z.string(),
  ciLowerLimitComment: z.string(),
  ciUpperLimitComment: z.string(),
  estimateComment: z.string(),
  testedNonInferiority: z.boolean(),
  nonInferiorityType: nonInferiorityTypeEnum,
  nonInferiorityComment: z.string(),
  otherAnalysisDescription: z.string(),
  groupDescription: z.string(),
  groupIds: z.array(z.string()),
})

const outcomeMeasureSchema = z.object({
  type: outcomeMeasureTypeEnum,
  title: z.string(),
  description: z.string(),
  populationDescription: z.string(),
  reportingStatus: reportingStatusEnum,
  anticipatedPostingDate: z
    .string()
    .describe("Date in yyyy, yyyy-MM, or yyyy-MM-dd format"),
  paramType: measureParamEnum,
  dispersionType: z.string(),
  unitOfMeasure: z.string(),
  calculatePct: z.boolean(),
  timeFrame: z.string(),
  typeUnitsAnalyzed: z.string(),
  denomUnitsSelected: z.string(),
  groups: z.array(groupSchema.partial()),
  denoms: z.array(denomSchema.partial()),
  classes: z.array(classSchema.partial()),
  analyses: z.array(analysisSchema.partial()),
})

const outcomeMeasureModuleSchema = z.object({
  outcomeMeasures: z.array(outcomeMeasureSchema.partial()),
})

// -------------------- Adverse Events module --------------------
const eventGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  deathsNumAffected: z.number(),
  deathsNumAtRisk: z.number(),
  seriousNumAffected: z.number(),
  seriousNumAtRisk: z.number(),
  otherNumAffected: z.number(),
  otherNumAtRisk: z.number(),
})

const eventStatSchema = z.object({
  groupId: z.string(),
  numEvents: z.number(),
  numAffected: z.number(),
  numAtRisk: z.number(),
})

const eventSchema = z.object({
  term: z.string(),
  organSystem: z.string(),
  sourceVocabulary: z.string(),
  assessmentType: eventAssessmentEnum,
  notes: z.string(),
  stats: z.array(eventStatSchema.partial()),
})

const adverseEventsModuleSchema = z.object({
  frequencyThreshold: z.string(),
  timeFrame: z.string(),
  description: z.string(),
  allCauseMortalityComment: z.string(),
  eventGroups: z.array(eventGroupSchema.partial()),
  seriousEvents: z.array(eventSchema.partial()),
  otherEvents: z.array(eventSchema.partial()),
})

// -------------------- More Info module --------------------
const moreInfoModuleSchema = z.object({
  limitationsAndCaveats: z
    .object({
      description: z.string(),
    })
    .partial(),
  certainAgreement: z
    .object({
      piSponsorEmployee: z.boolean(),
      restrictionType: agreementRestrictionTypeEnum,
      restrictiveAgreement: z.boolean(),
      otherDetails: z.string(),
    })
    .partial(),
  pointOfContact: z
    .object({
      title: z.string(),
      organization: z.string(),
      email: z.string(),
      phone: z.string(),
      phoneExt: z.string(),
    })
    .partial(),
})

const resultsSectionSchema = z.object({
  participantFlowModule: participantFlowModuleSchema.partial(),
  baselineCharacteristicsModule: baselineCharacteristicsModuleSchema.partial(),
  outcomeMeasuresModule: outcomeMeasureModuleSchema.partial(),
  adverseEventsModule: adverseEventsModuleSchema.partial(),
  moreInfoModule: moreInfoModuleSchema.partial(),
})

// ==================== ANNOTATION SECTION ====================

// -------------------- Annotation module --------------------
const unpostedEventSchema = z.object({
  type: unpostedEventTypeEnum,
  date: z.string(), // Check the date format
  dateUnknown: z.boolean(),
})

const violationEventSchema = z.object({
  type: violationEventTypeEnum,
  description: z.string(),
  creationDate: z.string(), // Check the date format
  issuedDate: z.string(), // Check the date format
  releaseDate: z.string(), // Check the date format
  postedDate: z.string(), // Check the date format
})

const annotationModuleSchema = z.object({
  unpostedAnnotation: z.object({
    unpostedResponsibleParty: z.string(),
    unpostedEvents: z.array(unpostedEventSchema.partial()),
  }),
  violationAnnotation: z.object({
    violationEvents: z.array(violationEventSchema.partial()),
  }),
})

const annotationSectionSchema = z.object({
  annotationModule: annotationModuleSchema.partial(),
})

// ==================== DOCUMENT SECTION ====================

// -------------------- Large Document module --------------------
const largeDocumentSchema = z.object({
  typeAbbrev: z.string(),
  hasProtocol: z.boolean(),
  hasSap: z.boolean(),
  hasIcf: z.boolean(),
  label: z.string(),
  date: z.string(),
  uploadDate: z.string().describe("Date and time in yyyy-MM-dd'T'HH:mm format"),
  filename: z.string(),
  size: z.number(),
})

const largeDocumentModuleSchema = z.object({
  noSap: z.boolean(),
  largeDocs: z.array(largeDocumentSchema.partial()),
})

const documentSectionSchema = z.object({
  largeDocumentModule: largeDocumentModuleSchema.partial(),
})

// ==================== DERIVED SECTION ====================

// -------------------- Misc Info module --------------------
const submissionInfoSchema = z.object({
  releaseDate: z.string(),
  unreleaseDate: z.string(),
  unreleaseDateUnknown: z.boolean(),
  resetDate: z.string(),
  mcpReleaseN: z.number(),
})

const miscInfoModuleSchema = z.object({
  versionHolder: z.string(),
  removedCountries: z.array(z.string()),
  submissionTracking: z
    .object({
      estimatedResultsFirstSubmitDate: z.string(),
      firstMcpInfo: z
        .object({
          postDateStruct: dateStructSchema.partial(),
        })
        .partial(),
      submissionInfos: z.array(submissionInfoSchema.partial()),
    })
    .partial(),
})

// -------------------- Condition Browse module --------------------
const meshOrAncestorSchema = z.object({
  id: z.string(),
  term: z.string(),
})
const browseLeafSchema = z.object({
  id: z.string(),
  name: z.string(),
  asFound: z.string(),
  relevance: browseLeafRelevanceEnum,
})

const browseBranchSchema = z.object({
  abbrev: z.string(),
  name: z.string(),
})

const conditionBrowseModuleSchema = z.object({
  meshes: z.array(meshOrAncestorSchema.partial()),
  ancestors: z.array(meshOrAncestorSchema.partial()),
  browseLeaves: z.array(browseLeafSchema.partial()),
  browseBranches: z.array(browseBranchSchema.partial()),
})

// -------------------- Intervention Browse module --------------------
const interventionBrowseModuleSchema = conditionBrowseModuleSchema // It's the same as the condition browse module

const derivedSectionSchema = z.object({
  miscInfoModule: miscInfoModuleSchema.partial(),
  conditionBrowseModule: conditionBrowseModuleSchema.partial(),
  interventionBrowseModule: interventionBrowseModuleSchema.partial(),
})

// ==================== STUDY SCHEMA ====================
export const studySchema = z
  .object({
    protocolSection: protocolSectionSchema.partial(),
    resultsSection: resultsSectionSchema.partial(),
    annotationSection: annotationSectionSchema.partial(),
    documentSection: documentSectionSchema.partial(),
    derivedSection: derivedSectionSchema.partial(),
    hasResults: z.boolean(),
  })
  .partial()

export type Study = z.infer<typeof studySchema>
