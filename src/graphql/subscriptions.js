/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String!) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String!) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String!) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($owner: String!) {
    onCreateMenu(owner: $owner) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($owner: String!) {
    onUpdateMenu(owner: $owner) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($owner: String!) {
    onDeleteMenu(owner: $owner) {
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
