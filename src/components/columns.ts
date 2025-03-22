import { CLINICAL_TRIALS_API_ENUMS } from "@/lib/constants"
import { ColDef, ColGroupDef } from "@/components/data-grid"
import { Study } from "@/validators/study"

export const columnDefs: (ColDef<Study> | ColGroupDef<Study>)[] = [
  {
    groupId: "ProtocolSection",
    headerName: "Protocol Section",
    children: [
      {
        groupId: "IdentificationModule",
        headerName: "Identification Module",
        children: [
          {
            colId: "NCTId",
            field: "protocolSection.identificationModule.nctId",
            headerName: "NCT ID",
            filter: "agTextColumnFilter",
          },
          {
            colId: "NCTIdAlias",
            field: "protocolSection.identificationModule.nctIdAliases",
            headerName: "NCT ID Aliases",
            // TODO: array of strings
          },
          {
            groupId: "OrgStudyIdInfo",
            headerName: "Org Study",
            children: [
              {
                colId: "OrgStudyId",
                field: "protocolSection.identificationModule.orgStudyIdInfo.id",
                headerName: "ID",
                filter: "agTextColumnFilter",
              },
              {
                colId: "OrgStudyIdType",
                field:
                  "protocolSection.identificationModule.orgStudyIdInfo.type",
                headerName: "Type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.OrgStudyIdType,
                    undefined,
                  ],
                },
              },
              {
                colId: "OrgStudyIdLink",
                field:
                  "protocolSection.identificationModule.orgStudyIdInfo.link",
                headerName: "Link",
                filter: "agTextColumnFilter",
              },
            ],
          },
          {
            colId: "SecondaryIdInfo",
            field: "protocolSection.identificationModule.secondaryIdInfos",
            headerName: "Secondary IDs",
            // TODO: array of objects
          },
          {
            colId: "BriefTitle",
            headerName: "Brief Title",
            field: "protocolSection.identificationModule.briefTitle",
            filter: "agTextColumnFilter",
          },
          {
            colId: "OfficialTitle",
            headerName: "Official Title",
            field: "protocolSection.identificationModule.officialTitle",
            filter: "agTextColumnFilter",
          },
          {
            colId: "Acronym",
            headerName: "Acronym",
            field: "protocolSection.identificationModule.acronym",
            filter: "agTextColumnFilter",
          },
          {
            groupId: "Organization",
            headerName: "Organization",
            children: [
              {
                colId: "OrgFullName",
                headerName: "Full Name",
                field:
                  "protocolSection.identificationModule.organization.fullName",
                filter: "agTextColumnFilter",
              },
              {
                colId: "OrgClass",
                headerName: "Class",
                field:
                  "protocolSection.identificationModule.organization.class",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.AgencyClass, undefined],
                },
              },
            ],
          },
        ],
      },
      {
        groupId: "StatusModule",
        headerName: "Status Module",
        children: [
          {
            colId: "StatusVerifiedDate",
            headerName: "Status Verified Date",
            field: "protocolSection.statusModule.statusVerifiedDate",
            // TODO: date pattern
          },
          {
            colId: "OverallStatus",
            headerName: "Overall Status",
            field: "protocolSection.statusModule.overallStatus",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.Status, undefined],
            },
          },
          {
            colId: "LastKnownStatus",
            headerName: "Last Known Status",
            field: "protocolSection.statusModule.lastKnownStatus",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.Status, undefined],
            },
          },
          {
            colId: "DelayedPosting",
            headerName: "Delayed Posting",
            field: "protocolSection.statusModule.delayedPosting",
            // TODO: boolean,
          },
          {
            colId: "WhyStopped",
            headerName: "Why Stopped",
            field: "protocolSection.statusModule.whyStopped",
            filter: "agTextColumnFilter",
          },
          {
            groupId: "ExpandedAccessInfo",
            headerName: "Expanded Access Info",
            children: [
              {
                colId: "HasExpandedAccess",
                headerName: "Has Expanded Access",
                field:
                  "protocolSection.statusModule.expandedAccessInfo.hasExpandedAccess",
                // TODO: boolean,
              },
              {
                colId: "ExpandedAccessNCTId",
                headerName: "NCT ID",
                field: "protocolSection.statusModule.expandedAccessInfo.nctId",
                filter: "agTextColumnFilter",
              },
              {
                colId: "ExpandedAccessStatusForNCTId",
                headerName: "Status",
                field:
                  "protocolSection.statusModule.expandedAccessInfo.statusForNctId",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.ExpandedAccessStatus,
                    undefined,
                  ],
                },
              },
            ],
          },
          {
            groupId: "StartDateStruct",
            headerName: "Start Date",
            children: [
              {
                colId: "StartDate",
                headerName: "Date",
                field: "protocolSection.statusModule.startDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "StartDateType",
                headerName: "Type",
                field: "protocolSection.statusModule.startDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            groupId: "PrimaryCompletionDateStruct",
            headerName: "Primary Completion Date",
            children: [
              {
                colId: "PrimaryCompletionDate",
                headerName: "Date",
                field:
                  "protocolSection.statusModule.primaryCompletionDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "PrimaryCompletionDateType",
                headerName: "Type",
                field:
                  "protocolSection.statusModule.primaryCompletionDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            groupId: "CompletionDateStruct",
            headerName: "Completion Date",
            children: [
              {
                colId: "CompletionDate",
                headerName: "Date",
                field: "protocolSection.statusModule.completionDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "CompletionDateType",
                headerName: "Type",
                field: "protocolSection.statusModule.completionDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            colId: "StudyFirstSubmitDate",
            headerName: "Study First Submit Date",
            field: "protocolSection.statusModule.studyFirstSubmitDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "StudyFirstSubmitQCDate",
            headerName: "Study First Submit QC Date",
            field: "protocolSection.statusModule.studyFirstSubmitQcDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            groupId: "StudyFirstPostDateStruct",
            headerName: "Study First Post Date",
            children: [
              {
                colId: "StudyFirstPostDate",
                headerName: "Date",
                field:
                  "protocolSection.statusModule.studyFirstPostDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "StudyFirstPostDateType",
                headerName: "Type",
                field:
                  "protocolSection.statusModule.studyFirstPostDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            colId: "ResultsFirstSubmitDate",
            headerName: "Results First Submit Date",
            field: "protocolSection.statusModule.resultsFirstSubmitDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "ResultsFirstSubmitQCDate",
            headerName: "Results First Submit QC Date",
            field: "protocolSection.statusModule.resultsFirstSubmitQcDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            groupId: "ResultsFirstPostDateStruct",
            headerName: "Results First Post Date",
            children: [
              {
                colId: "ResultsFirstPostDate",
                headerName: "Date",
                field:
                  "protocolSection.statusModule.resultsFirstPostDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "ResultsFirstPostDateType",
                headerName: "Type",
                field:
                  "protocolSection.statusModule.resultsFirstPostDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            colId: "DispFirstSubmitDate",
            headerName: "Disp First Submit Date",
            field: "protocolSection.statusModule.dispFirstSubmitDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "DispFirstSubmitQCDate",
            headerName: "Disp First Submit QC Date",
            field: "protocolSection.statusModule.dispFirstSubmitQcDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            groupId: "DispFirstPostDateStruct",
            headerName: "Disp First Post Date",
            children: [
              {
                colId: "DispFirstPostDate",
                headerName: "Date",
                field:
                  "protocolSection.statusModule.dispFirstPostDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "DispFirstPostDateType",
                headerName: "Type",
                field:
                  "protocolSection.statusModule.dispFirstPostDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
          {
            colId: "LastUpdateSubmitDate",
            headerName: "Last Update Submit Date",
            field: "protocolSection.statusModule.lastUpdateSubmitDate",
            // TODO: Needs special handling because of the pattern
          },
          {
            groupId: "LastUpdatePostDateStruct",
            headerName: "Last Update Post Date",
            children: [
              {
                colId: "LastUpdatePostDate",
                headerName: "Date",
                field:
                  "protocolSection.statusModule.lastUpdatePostDateStruct.date",
                // TODO: Needs special handling because of the pattern
              },
              {
                colId: "LastUpdatePostDateType",
                headerName: "Type",
                field:
                  "protocolSection.statusModule.lastUpdatePostDateStruct.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.DateType, undefined],
                },
              },
            ],
          },
        ],
      },
      {
        groupId: "SponsorCollaboratorsModule",
        headerName: "Sponsors and Collaborators Module",
        children: [
          {
            groupId: "ResponsibleParty",
            headerName: "Responsible Party",
            children: [
              {
                colId: "ResponsiblePartyType",
                headerName: "Type",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.ResponsiblePartyType,
                    undefined,
                  ],
                },
              },
              {
                colId: "ResponsiblePartyInvestigatorFullName",
                headerName: "Investigator Full Name",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.investigatorFullName",
                filter: "agTextColumnFilter",
              },
              {
                colId: "ResponsiblePartyInvestigatorTitle",
                headerName: "Investigator Title",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.investigatorTitle",
                filter: "agTextColumnFilter",
              },
              {
                colId: "ResponsiblePartyInvestigatorAffiliation",
                headerName: "Investigator Affiliation",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.investigatorAffiliation",
                filter: "agTextColumnFilter",
              },
              {
                colId: "ResponsiblePartyOldNameTitle",
                headerName: "Old Name Title",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.oldNameTitle",
                filter: "agTextColumnFilter",
              },
              {
                colId: "ResponsiblePartyOldOrganization",
                headerName: "Old Organization",
                field:
                  "protocolSection.sponsorCollaboratorsModule.responsibleParty.oldOrganization",
                filter: "agTextColumnFilter",
              },
            ],
          },
          {
            groupId: "LeadSponsor",
            headerName: "Lead Sponsor",
            children: [
              {
                colId: "LeadSponsorName",
                headerName: "Name",
                field:
                  "protocolSection.sponsorCollaboratorsModule.leadSponsor.name",
                filter: "agTextColumnFilter",
              },
              {
                colId: "LeadSponsorClass",
                headerName: "Class",
                field:
                  "protocolSection.sponsorCollaboratorsModule.leadSponsor.class",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [...CLINICAL_TRIALS_API_ENUMS.AgencyClass, undefined],
                },
              },
            ],
          },
          {
            colId: "Collaborator",
            headerName: "Collaborators",
            field: "protocolSection.sponsorCollaboratorsModule.collaborators",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "OversightModule",
        headerName: "Oversight Module",
        children: [
          {
            colId: "OversightHasDMC",
            headerName: "Has DMC",
            field: "protocolSection.oversightModule.oversightHasDmc",
            // TODO: boolean
          },
          {
            colId: "IsFDARegulatedDrug",
            headerName: "Is FDA Regulated Drug",
            field: "protocolSection.oversightModule.isFdaRegulatedDrug",
            // TODO: boolean
          },
          {
            colId: "IsFDARegulatedDevice",
            headerName: "Is FDA Regulated Device",
            field: "protocolSection.oversightModule.isFdaRegulatedDevice",
            // TODO: boolean
          },
          {
            colId: "IsUnapprovedDevice",
            headerName: "Is Unapproved Device",
            field: "protocolSection.oversightModule.isUnapprovedDevice",
            // TODO: boolean
          },
          {
            colId: "IsPPSD",
            headerName: "Is PPSD",
            field: "protocolSection.oversightModule.isPpsd",
            // TODO: boolean
          },
          {
            colId: "IsUSExport",
            headerName: "Is US Export",
            field: "protocolSection.oversightModule.isUsExport",
            // TODO: boolean
          },
          {
            colId: "FDAAA801Violation",
            headerName: "FDAAA801 Violation",
            field: "protocolSection.oversightModule.fdaaa801Violation",
            // TODO: boolean
          },
        ],
      },
      {
        groupId: "DescriptionModule",
        headerName: "Description Module",
        children: [
          {
            colId: "BriefSummary",
            headerName: "Brief Summary",
            field: "protocolSection.descriptionModule.briefSummary",
            filter: "agTextColumnFilter",
          },
          {
            colId: "DetailedDescription",
            headerName: "Detailed Description",
            field: "protocolSection.descriptionModule.detailedDescription",
            filter: "agTextColumnFilter",
          },
        ],
      },
      {
        groupId: "ConditionsModule",
        headerName: "Conditions Module",
        children: [
          {
            colId: "Condition",
            headerName: "Conditions",
            field: "protocolSection.conditionsModule.conditions",
            // TODO: Needs special handling because it is an array of strings
          },
          {
            colId: "Keyword",
            headerName: "Keywords",
            field: "protocolSection.conditionsModule.keywords",
            // TODO: Needs special handling because it is an array of strings
          },
        ],
      },
      {
        groupId: "DesignModule",
        headerName: "Design Module",
        children: [
          {
            colId: "StudyType",
            headerName: "Study Type",
            field: "protocolSection.designModule.studyType",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.StudyType, undefined],
            },
          },
          {
            colId: "NPtrsToThisExpAccNCTId",
            headerName: "Num Pointers To This Expanded Access NCT ID",
            field: "protocolSection.designModule.nPtrsToThisExpAccNctId",
            filter: "agNumberColumnFilter",
          },
          {
            groupId: "ExpandedAccessTypes",
            headerName: "Expanded Access Types",
            children: [
              {
                colId: "ExpAccTypeIndividual",
                headerName: "Individual",
                field:
                  "protocolSection.designModule.expandedAccessTypes.individual",
                // TODO: boolean
              },
              {
                colId: "ExpAccTypeIntermediate",
                headerName: "Intermediate",
                field:
                  "protocolSection.designModule.expandedAccessTypes.intermediate",
                // TODO: boolean
              },
              {
                colId: "ExpAccTypeTreatment",
                headerName: "Treatment",
                field:
                  "protocolSection.designModule.expandedAccessTypes.treatment",
                // TODO: boolean
              },
            ],
          },
          {
            colId: "PatientRegistry",
            headerName: "Patient Registry",
            field: "protocolSection.designModule.patientRegistry",
            // TODO: boolean
          },
          {
            colId: "TargetDuration",
            headerName: "Target Duration",
            field: "protocolSection.designModule.targetDuration",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "Phase",
            headerName: "Phases",
            field: "protocolSection.designModule.phases",
            // TODO: array of enum
          },
          {
            groupId: "DesignInfo",
            headerName: "Design Info",
            children: [
              {
                colId: "DesignAllocation",
                headerName: "Allocation",
                field: "protocolSection.designModule.designInfo.allocation",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.DesignAllocation,
                    undefined,
                  ],
                },
              },
              {
                colId: "DesignInterventionModel",
                headerName: "Intervention Model",
                field:
                  "protocolSection.designModule.designInfo.interventionModel",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.InterventionalAssignment,
                    undefined,
                  ],
                },
              },
              {
                colId: "DesignInterventionModelDescription",
                headerName: "Intervention Model Description",
                field:
                  "protocolSection.designModule.designInfo.interventionModelDescription",
                filter: "agTextColumnFilter",
              },
              {
                colId: "DesignPrimaryPurpose",
                headerName: "Primary Purpose",
                field: "protocolSection.designModule.designInfo.primaryPurpose",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.PrimaryPurpose,
                    undefined,
                  ],
                },
              },
              {
                colId: "DesignObservationalModel",
                headerName: "Observational Model",
                field:
                  "protocolSection.designModule.designInfo.observationalModel",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.ObservationalModel,
                    undefined,
                  ],
                },
              },
              {
                colId: "DesignTimePerspective",
                headerName: "Time Perspective",
                field:
                  "protocolSection.designModule.designInfo.timePerspective",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.TimePerspective,
                    undefined,
                  ],
                },
              },
              {
                groupId: "DesignMaskingInfo",
                headerName: "Masking Info",
                children: [
                  {
                    colId: "DesignMasking",
                    headerName: "Masking",
                    field:
                      "protocolSection.designModule.designInfo.maskingInfo.masking",
                    filter: "agSetColumnFilter",
                    filterParams: {
                      values: [
                        ...CLINICAL_TRIALS_API_ENUMS.DesignMasking,
                        undefined,
                      ],
                    },
                  },
                  {
                    colId: "DesignMaskingDescription",
                    headerName: "Masking Description",
                    field:
                      "protocolSection.designModule.designInfo.maskingInfo.maskingDescription",
                    filter: "agTextColumnFilter",
                  },
                  {
                    colId: "DesignWhoMasked",
                    headerName: "Who Masked",
                    field:
                      "protocolSection.designModule.designInfo.maskingInfo.whoMasked",
                    filter: "agSetColumnFilter",
                    filterParams: {
                      values: [
                        ...CLINICAL_TRIALS_API_ENUMS.WhoMasked,
                        undefined,
                      ],
                    },
                  },
                ],
              },
            ],
          },
          {
            groupId: "BioSpec",
            headerName: "Bio Spec",
            children: [
              {
                colId: "BioSpecRetention",
                headerName: "Retention",
                field: "protocolSection.designModule.bioSpec.retention",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.BioSpecRetention,
                    undefined,
                  ],
                },
              },
              {
                colId: "BioSpecDescription",
                headerName: "Description",
                field: "protocolSection.designModule.bioSpec.description",
                filter: "agTextColumnFilter",
              },
            ],
          },
          {
            groupId: "EnrollmentInfo",
            headerName: "Enrollment Info",
            children: [
              {
                colId: "EnrollmentCount",
                headerName: "Count",
                field: "protocolSection.designModule.enrollmentInfo.count",
                filter: "agNumberColumnFilter",
              },
              {
                colId: "EnrollmentType",
                headerName: "Type",
                field: "protocolSection.designModule.enrollmentInfo.type",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.EnrollmentType,
                    undefined,
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        groupId: "ArmsInterventionsModule",
        headerName: "Arms and Interventions Module",
        children: [
          {
            colId: "ArmGroup",
            headerName: "Arm Groups",
            field: "protocolSection.armsInterventionsModule.armGroups",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "Intervention",
            headerName: "Interventions",
            field: "protocolSection.armsInterventionsModule.interventions",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "OutcomesModule",
        headerName: "Outcomes Module",
        children: [
          {
            colId: "PrimaryOutcome",
            headerName: "Primary Outcomes",
            field: "protocolSection.outcomesModule.primaryOutcomes",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "SecondaryOutcome",
            headerName: "Secondary Outcomes",
            field: "protocolSection.outcomesModule.secondaryOutcomes",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "OtherOutcome",
            headerName: "Other Outcomes",
            field: "protocolSection.outcomesModule.otherOutcomes",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "EligibilityModule",
        headerName: "Eligibility Module",
        children: [
          {
            colId: "EligibilityCriteria",
            headerName: "Eligibility Criteria",
            field: "protocolSection.eligibilityModule.eligibilityCriteria",
            filter: "agTextColumnFilter",
          },
          {
            colId: "HealthyVolunteers",
            headerName: "Healthy Volunteers",
            field: "protocolSection.eligibilityModule.healthyVolunteers",
            // TODO: boolean
          },
          {
            colId: "Sex",
            headerName: "Sex",
            field: "protocolSection.eligibilityModule.sex",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.Sex, undefined],
            },
          },
          {
            colId: "GenderBased",
            headerName: "Gender Based",
            field: "protocolSection.eligibilityModule.genderBased",
            // TODO: boolean
          },
          {
            colId: "GenderDescription",
            headerName: "Gender Description",
            field: "protocolSection.eligibilityModule.genderDescription",
            filter: "agTextColumnFilter",
          },
          {
            colId: "MinimumAge",
            headerName: "Minimum Age",
            field: "protocolSection.eligibilityModule.minimumAge",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "MaximumAge",
            headerName: "Maximum Age",
            field: "protocolSection.eligibilityModule.maximumAge",
            // TODO: Needs special handling because of the pattern
          },
          {
            colId: "StdAge",
            headerName: "Standard Ages",
            field: "protocolSection.eligibilityModule.stdAges",
            // TODO: array of enum
          },
          {
            colId: "StudyPopulation",
            headerName: "Study Population",
            field: "protocolSection.eligibilityModule.studyPopulation",
            filter: "agTextColumnFilter",
          },
          {
            colId: "SamplingMethod",
            headerName: "Sampling Method",
            field: "protocolSection.eligibilityModule.samplingMethod",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.SamplingMethod, undefined],
            },
          },
        ],
      },
      {
        groupId: "ContactsLocationsModule",
        headerName: "Contacts and Locations Module",
        children: [
          {
            colId: "CentralContact",
            headerName: "Central Contacts",
            field: "protocolSection.contactsLocationsModule.centralContacts",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "OverallOfficial",
            headerName: "Overall Officials",
            field: "protocolSection.contactsLocationsModule.overallOfficials",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "Location",
            headerName: "Locations",
            field: "protocolSection.contactsLocationsModule.locations",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "ReferencesModule",
        headerName: "References Module",
        children: [
          {
            colId: "Reference",
            headerName: "References",
            field: "protocolSection.referencesModule.references",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "SeeAlsoLink",
            headerName: "See Also Links",
            field: "protocolSection.referencesModule.seeAlsoLinks",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "AvailIPD",
            headerName: "Available IPDs",
            field: "protocolSection.referencesModule.availIpds",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "IPDSharingStatementModule",
        headerName: "IPD Sharing Statement Module",
        children: [
          {
            colId: "IPDSharing",
            headerName: "IPD Sharing",
            field: "protocolSection.ipdSharingStatementModule.ipdSharing",
            filter: "agSetColumnFilter",
            filterParams: {
              values: [...CLINICAL_TRIALS_API_ENUMS.IpdSharing, undefined],
            },
          },
          {
            colId: "IPDSharingDescription",
            headerName: "Description",
            field: "protocolSection.ipdSharingStatementModule.description",
            filter: "agTextColumnFilter",
          },
          {
            colId: "IPDSharingInfoType",
            headerName: "Info Types",
            field: "protocolSection.ipdSharingStatementModule.infoTypes",
            // TODO: array of enum
          },
          {
            colId: "IPDSharingTimeFrame",
            headerName: "Time Frame",
            field: "protocolSection.ipdSharingStatementModule.timeFrame",
            filter: "agTextColumnFilter",
          },
          {
            colId: "IPDSharingAccessCriteria",
            headerName: "Access Criteria",
            field: "protocolSection.ipdSharingStatementModule.accessCriteria",
            filter: "agTextColumnFilter",
          },
          {
            colId: "IPDSharingURL",
            headerName: "URL",
            field: "protocolSection.ipdSharingStatementModule.url",
            filter: "agTextColumnFilter",
          },
        ],
      },
    ],
  },
  {
    groupId: "ResultsSection",
    headerName: "Results Section",
    children: [
      {
        groupId: "ParticipantFlowModule",
        headerName: "Participant Flow Module",
        children: [
          {
            colId: "FlowPreAssignmentDetails",
            headerName: "Pre Assignment Details",
            field: "resultsSection.participantFlowModule.preAssignmentDetails",
            filter: "agTextColumnFilter",
          },
          {
            colId: "FlowRecruitmentDetails",
            headerName: "Recruitment Details",
            field: "resultsSection.participantFlowModule.recruitmentDetails",
            filter: "agTextColumnFilter",
          },
          {
            colId: "FlowTypeUnitsAnalyzed",
            headerName: "Type Units Analyzed",
            field: "resultsSection.participantFlowModule.typeUnitsAnalyzed",
            filter: "agTextColumnFilter",
          },
          {
            colId: "FlowGroup",
            headerName: "Groups",
            field: "resultsSection.participantFlowModule.groups",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "FlowPeriod",
            headerName: "Periods",
            field: "resultsSection.participantFlowModule.periods",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "BaselineCharacteristicsModule",
        headerName: "Baseline Characteristics Module",
        children: [
          {
            colId: "BaselinePopulationDescription",
            headerName: "Population Description",
            field:
              "resultsSection.baselineCharacteristicsModule.populationDescription",
            filter: "agTextColumnFilter",
          },
          {
            colId: "BaselineTypeUnitsAnalyzed",
            headerName: "Type Units Analyzed",
            field:
              "resultsSection.baselineCharacteristicsModule.typeUnitsAnalyzed",
            filter: "agTextColumnFilter",
          },
          {
            colId: "BaselineGroup",
            headerName: "Groups",
            field: "resultsSection.baselineCharacteristicsModule.groups",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "BaselineDenom",
            headerName: "Denoms",
            field: "resultsSection.baselineCharacteristicsModule.denoms",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "BaselineMeasure",
            headerName: "Measures",
            field: "resultsSection.baselineCharacteristicsModule.measures",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "OutcomeMeasuresModule",
        headerName: "Outcome Measures Module",
        children: [
          {
            colId: "OutcomeMeasure",
            headerName: "Outcome Measures",
            field: "resultsSection.outcomeMeasuresModule.outcomeMeasures",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "AdverseEventsModule",
        headerName: "Adverse Events Module",
        children: [
          {
            colId: "EventsFrequencyThreshold",
            headerName: "Frequency Threshold",
            field: "resultsSection.adverseEventsModule.frequencyThreshold",
            filter: "agTextColumnFilter",
          },
          {
            colId: "EventsTimeFrame",
            headerName: "Time Frame",
            field: "resultsSection.adverseEventsModule.timeFrame",
            filter: "agTextColumnFilter",
          },
          {
            colId: "EventsDescription",
            headerName: "Description",
            field: "resultsSection.adverseEventsModule.description",
            filter: "agTextColumnFilter",
          },
          {
            colId: "EventsAllCauseMortalityComment",
            headerName: "All Cause Mortality Comment",
            field:
              "resultsSection.adverseEventsModule.allCauseMortalityComment",
            filter: "agTextColumnFilter",
          },
          {
            colId: "EventGroup",
            headerName: "Event Groups",
            field: "resultsSection.adverseEventsModule.eventGroups",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "SeriousEvent",
            headerName: "Serious Events",
            field: "resultsSection.adverseEventsModule.seriousEvents",
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "OtherEvent",
            headerName: "Other Events",
            field: "resultsSection.adverseEventsModule.otherEvents",
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "MoreInfoModule",
        headerName: "More Info Module",
        children: [
          {
            groupId: "LimitationsAndCaveats",
            headerName: "Limitations And Caveats",
            children: [
              {
                colId: "LimitationsAndCaveatsDescription",
                headerName: "Description",
                field:
                  "resultsSection.moreInfoModule.limitationsAndCaveats.description",
                filter: "agTextColumnFilter",
              },
            ],
          },
          {
            groupId: "CertainAgreement",
            headerName: "Certain Agreement",
            children: [
              {
                colId: "AgreementPISponsorEmployee",
                headerName: "PI Sponsor Employee",
                field:
                  "resultsSection.moreInfoModule.certainAgreement.piSponsorEmployee",
                // TODO: boolean
              },
              {
                colId: "AgreementRestrictionType",
                headerName: "Restriction Type",
                field:
                  "resultsSection.moreInfoModule.certainAgreement.restrictionType",
                filter: "agSetColumnFilter",
                filterParams: {
                  values: [
                    ...CLINICAL_TRIALS_API_ENUMS.AgreementRestrictionType,
                    undefined,
                  ],
                },
              },
              {
                colId: "AgreementRestrictiveAgreement",
                headerName: "Restrictive Agreement",
                field:
                  "resultsSection.moreInfoModule.certainAgreement.restrictiveAgreement",
                // TODO: boolean
              },
              {
                colId: "AgreementOtherDetails",
                headerName: "Other Details",
                field:
                  "resultsSection.moreInfoModule.certainAgreement.otherDetails",
                filter: "agTextColumnFilter",
              },
            ],
          },
          {
            groupId: "PointOfContact",
            headerName: "Point Of Contact",
            children: [
              {
                colId: "PointOfContactTitle",
                headerName: "Title",
                field: "resultsSection.moreInfoModule.pointOfContact.title",
                filter: "agTextColumnFilter",
              },
              {
                colId: "PointOfContactOrganization",
                headerName: "Organization",
                field:
                  "resultsSection.moreInfoModule.pointOfContact.organization",
                filter: "agTextColumnFilter",
              },
              {
                colId: "PointOfContactEMail",
                headerName: "Email",
                field: "resultsSection.moreInfoModule.pointOfContact.email",
                filter: "agTextColumnFilter",
              },
              {
                colId: "PointOfContactPhone",
                headerName: "Phone",
                field: "resultsSection.moreInfoModule.pointOfContact.phone",
                filter: "agTextColumnFilter",
              },
              {
                colId: "PointOfContactPhoneExt",
                headerName: "Phone Ext",
                field: "resultsSection.moreInfoModule.pointOfContact.phoneExt",
                filter: "agTextColumnFilter",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    groupId: "AnnotationSection",
    headerName: "Annotation Section",
    children: [
      {
        groupId: "AnnotationModule",
        headerName: "Annotation Module",
        children: [
          {
            groupId: "UnpostedAnnotation",
            headerName: "Unposted Annotation",
            children: [
              {
                colId: "UnpostedResponsibleParty",
                field:
                  "annotationSection.annotationModule.unpostedAnnotation.unpostedResponsibleParty",
                headerName: "Responsible Party",
                initialHide: true,
                filter: "agTextColumnFilter",
              },
              {
                colId: "UnpostedEvent",
                field:
                  "annotationSection.annotationModule.unpostedAnnotation.unpostedEvents",
                headerName: "Events",
                initialHide: true,
                // TODO: Needs special handling because it is an array of objects
              },
            ],
          },
          {
            groupId: "ViolationAnnotation",
            headerName: "Violation Annotation",
            children: [
              {
                colId: "ViolationEvent",
                field:
                  "annotationSection.annotationModule.violationAnnotation.violationEvents",
                headerName: "Events",
                initialHide: true,
                // TODO: Needs special handling because it is an array of objects
              },
            ],
          },
        ],
      },
    ],
  },
  {
    groupId: "DocumentSection",
    headerName: "Document Section",
    children: [
      {
        groupId: "LargeDocumentModule",
        headerName: "Large Document Module",
        children: [
          {
            colId: "LargeDocNoSAP",
            field: "documentSection.largeDocumentModule.noSap",
            headerName: "No SAP",
            initialHide: true,
            // TODO: boolean
          },
          {
            colId: "LargeDoc",
            field: "documentSection.largeDocumentModule.largeDocs",
            headerName: "Large Documents",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
    ],
  },
  {
    groupId: "DerivedSection",
    headerName: "Derived Section",
    children: [
      {
        groupId: "MiscInfoModule",
        headerName: "Misc Info Module",
        children: [
          {
            colId: "VersionHolder",
            field: "derivedSection.miscInfoModule.versionHolder",
            headerName: "Version Holder",
            initialHide: true,
            // TODO: Needs special handling because it is date pattern
          },
          {
            colId: "RemovedCountry",
            field: "derivedSection.miscInfoModule.removedCountries",
            headerName: "Removed Countries",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            groupId: "SubmissionTracking",
            headerName: "Submission Tracking",
            children: [
              {
                colId: "EstimatedResultsFirstSubmitDate",
                field:
                  "derivedSection.miscInfoModule.submissionTracking.estimatedResultsFirstSubmitDate",
                headerName: "Estimated Results First Submit Date",
                initialHide: true,
                // TODO: Needs special handling because it is date pattern
              },
              {
                groupId: "FirstMCPInfo",
                headerName: "First MCP Info",
                children: [
                  {
                    groupId: "FirstMCPPostDateStruct",
                    headerName: "Post Date Struct",
                    children: [
                      {
                        colId: "FirstMCPPostDate",
                        field:
                          "derivedSection.miscInfoModule.submissionTracking.firstMcpInfo.postDateStruct.date",
                        headerName: "Date",
                        initialHide: true,
                        // TODO: Needs special handling because it is date pattern
                      },
                      {
                        colId: "FirstMCPPostDateType",
                        field:
                          "derivedSection.miscInfoModule.submissionTracking.firstMcpInfo.postDateStruct.type",
                        headerName: "Type",
                        initialHide: true,
                        filter: "agSetColumnFilter",
                        filterParams: {
                          values: [
                            ...CLINICAL_TRIALS_API_ENUMS.DateType,
                            undefined,
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
              {
                colId: "SubmissionInfo",
                field:
                  "derivedSection.miscInfoModule.submissionTracking.submissionInfos",
                headerName: "Submission Info",
                initialHide: true,
                // TODO: Needs special handling because it is an array of objects
              },
            ],
          },
        ],
      },
      {
        groupId: "ConditionBrowseModule",
        headerName: "Condition Browse Module",
        children: [
          {
            colId: "ConditionMesh",
            field: "derivedSection.conditionBrowseModule.meshes",
            headerName: "Meshes",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "ConditionAncestor",
            field: "derivedSection.conditionBrowseModule.ancestors",
            headerName: "Ancestors",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "ConditionBrowseLeaf",
            field: "derivedSection.conditionBrowseModule.browseLeaves",
            headerName: "Browse Leaves",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "ConditionBrowseBranch",
            field: "derivedSection.conditionBrowseModule.browseBranches",
            headerName: "Browse Branches",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
      {
        groupId: "InterventionBrowseModule",
        headerName: "Intervention Browse Module",
        children: [
          {
            colId: "InterventionMesh",
            headerName: "Meshes",
            field: "derivedSection.interventionBrowseModule.meshes",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "InterventionAncestor",
            headerName: "Ancestors",
            field: "derivedSection.interventionBrowseModule.ancestors",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "InterventionBrowseLeaf",
            headerName: "Browse Leaves",
            field: "derivedSection.interventionBrowseModule.browseLeaves",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
          {
            colId: "InterventionBrowseBranch",
            headerName: "Browse Branches",
            field: "derivedSection.interventionBrowseModule.browseBranches",
            initialHide: true,
            // TODO: Needs special handling because it is an array of objects
          },
        ],
      },
    ],
  },
  {
    colId: "HasResults",
    field: "hasResults",
    headerName: "Has Results",
    initialHide: true,
    // TODO: boolean
  },
]
