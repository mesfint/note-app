import React from "react";
import { List, Card } from "antd";

function GenerateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(GenerateRandomColor());

function AppNote() {
  const data = [
    {
      title: "Startup meeting",
      content:
        "Learn about the cloud, including the history, building blocks, and types on your way to becoming a Cloud Administrator.",
    },
    {
      title: "Bootcamp Practice",
      content:
        "Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint",
    },
    {
      title: "Code war practice",
      content:
        "Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint",
    },
    {
      title: "Mentorship meeting",
      content:
        "Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint",
    },
    {
      title: "Design Figma wireframes",
      content:
        "Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint",
    },
    {
      title: "Finish projects",
      content:
        "Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint",
    },
  ];
  return (
    <div className="site-card-wrapper">
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ backgroundColor: GenerateRandomColor() }}
              title={item.title}
            >
              {item.content}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default AppNote;
