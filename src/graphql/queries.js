import { gql } from '@apollo/client';

export const GET_SPACEX_DATA = gql`
  query GetSpaceXData {
    launches {
      flight_number
      mission_name
      launch_year
      rocket {
        rocket_name
      }
    }
  }
`;
