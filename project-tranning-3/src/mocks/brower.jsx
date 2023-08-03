import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/", (req, res, ctx) => {
    return res(
      ctx.json({
        users: [
          {
            id: 1,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 2,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 3,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 4,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 5,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 6,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 7,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 8,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 9,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 10,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
        ],
      })
    );
  })
);

worker.start();
