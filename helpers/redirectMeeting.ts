export const redirectMeeting = () => {
  if (typeof window !== "undefined") {
    window.open(
      "https://calendly.com/hakimhamaili/free-15-minute-demo-call",
      "_blank"
    );
  }
};
