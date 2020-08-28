/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      location
      phoneNumber
      companyUrl
      facebookLink
      instagramLink
      twitterLink
      logo
      description
      urlStub
      createdAt
      updatedAt
      owner
      menus {
        items {
          id
          dayOfWeek
          name
          picture
          price
          description
          extraItem {
            extraName
            extraPrice
          }
          createdAt
          updatedAt
          company {
            id
            name
            location
            phoneNumber
            companyUrl
            facebookLink
            instagramLink
            twitterLink
            logo
            description
            urlStub
            createdAt
            updatedAt
            owner
            menus {
              items {
                id
                dayOfWeek
                name
                picture
                price
                description
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      location
      phoneNumber
      companyUrl
      facebookLink
      instagramLink
      twitterLink
      logo
      description
      urlStub
      createdAt
      updatedAt
      owner
      menus {
        items {
          id
          dayOfWeek
          name
          picture
          price
          description
          extraItem {
            extraName
            extraPrice
          }
          createdAt
          updatedAt
          company {
            id
            name
            location
            phoneNumber
            companyUrl
            facebookLink
            instagramLink
            twitterLink
            logo
            description
            urlStub
            createdAt
            updatedAt
            owner
            menus {
              items {
                id
                dayOfWeek
                name
                picture
                price
                description
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      location
      phoneNumber
      companyUrl
      facebookLink
      instagramLink
      twitterLink
      logo
      description
      urlStub
      createdAt
      updatedAt
      owner
      menus {
        items {
          id
          dayOfWeek
          name
          picture
          price
          description
          extraItem {
            extraName
            extraPrice
          }
          createdAt
          updatedAt
          company {
            id
            name
            location
            phoneNumber
            companyUrl
            facebookLink
            instagramLink
            twitterLink
            logo
            description
            urlStub
            createdAt
            updatedAt
            owner
            menus {
              items {
                id
                dayOfWeek
                name
                picture
                price
                description
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      dayOfWeek
      name
      picture
      price
      description
      extraItem {
        extraName
        extraPrice
      }
      createdAt
      updatedAt
      company {
        id
        name
        location
        phoneNumber
        companyUrl
        facebookLink
        instagramLink
        twitterLink
        logo
        description
        urlStub
        createdAt
        updatedAt
        owner
        menus {
          items {
            id
            dayOfWeek
            name
            picture
            price
            description
            extraItem {
              extraName
              extraPrice
            }
            createdAt
            updatedAt
            company {
              id
              name
              location
              phoneNumber
              companyUrl
              facebookLink
              instagramLink
              twitterLink
              logo
              description
              urlStub
              createdAt
              updatedAt
              owner
              menus {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      dayOfWeek
      name
      picture
      price
      description
      extraItem {
        extraName
        extraPrice
      }
      createdAt
      updatedAt
      company {
        id
        name
        location
        phoneNumber
        companyUrl
        facebookLink
        instagramLink
        twitterLink
        logo
        description
        urlStub
        createdAt
        updatedAt
        owner
        menus {
          items {
            id
            dayOfWeek
            name
            picture
            price
            description
            extraItem {
              extraName
              extraPrice
            }
            createdAt
            updatedAt
            company {
              id
              name
              location
              phoneNumber
              companyUrl
              facebookLink
              instagramLink
              twitterLink
              logo
              description
              urlStub
              createdAt
              updatedAt
              owner
              menus {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      dayOfWeek
      name
      picture
      price
      description
      extraItem {
        extraName
        extraPrice
      }
      createdAt
      updatedAt
      company {
        id
        name
        location
        phoneNumber
        companyUrl
        facebookLink
        instagramLink
        twitterLink
        logo
        description
        urlStub
        createdAt
        updatedAt
        owner
        menus {
          items {
            id
            dayOfWeek
            name
            picture
            price
            description
            extraItem {
              extraName
              extraPrice
            }
            createdAt
            updatedAt
            company {
              id
              name
              location
              phoneNumber
              companyUrl
              facebookLink
              instagramLink
              twitterLink
              logo
              description
              urlStub
              createdAt
              updatedAt
              owner
              menus {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
