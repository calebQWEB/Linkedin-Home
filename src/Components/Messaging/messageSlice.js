import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import owner from '../../assets/profile/owner.jpg'

// This function generates a random date in a month and day format (e.g April 25)
function getRandomDate() {
  const date = faker.date.recent();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
}

const initialState = {
  conversations: [
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 25'
        },
        {
          sender: 'person',
          message: faker.lorem.paragraph(),
          timestamp: 'Apr 25'
        },
        {
          sender: 'you',
          message: faker.lorem.paragraph(),
          avatar: owner,
          timestamp: 'Apr 25'
        }
      ]
    },
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 26'
        },
        {
          sender: 'person',
          message: faker.lorem.paragraph(),
          timestamp: 'Apr 26'
        },
        {
          sender: 'you',
          message: faker.lorem.paragraph(),
          avatar: owner,
          timestamp: 'Apr 26'
        }
      ]
    },
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 25'
        },
        {
          sender: 'person',
          message: faker.lorem.paragraph(),
          timestamp: 'Apr 25'
        },
        {
          sender: 'you',
          message: faker.lorem.paragraph(),
          avatar: owner,
          timestamp: 'Apr 25'
        }
      ]
    },
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 26'
        },
        {
          sender: 'person',
          message: faker.lorem.paragraph(),
          timestamp: 'Apr 26'
        },
        {
          sender: 'you',
          message: faker.lorem.paragraph(),
          avatar: owner,
          timestamp: 'Apr 26'
        }
      ]
    },
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 26'
        },
        {
          sender: 'person',
          message: faker.lorem.paragraph(),
          timestamp: 'Apr 26'
        },
        {
          sender: 'you',
          message: faker.lorem.paragraph(),
          avatar: owner,
          timestamp: 'Apr 26'
        }
      ]
    },
    {
      id: faker.random.numeric(),
      name: faker.name.fullName(),
      timestamp: getRandomDate(),
      avatar: faker.internet.avatar(),
      jobTitle: faker.name.jobTitle(),
      conversation: [
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 26'
        },
        {
          sender: 'person',
          message: faker.lorem.sentence(),
          timestamp: 'Apr 26'
        },
        {
          sender: 'you',
          message: faker.lorem.sentence(),
          avatar: owner,
          timestamp: 'Apr 26'
        }
      ]
    },
  ],
};

const messageSlice = createSlice({
  name: "Message",
  initialState,
});

export default messageSlice.reducer;
export const { addConversation } = messageSlice.actions;
