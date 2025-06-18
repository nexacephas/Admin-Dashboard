import React, { useState } from 'react';

const dummyEmails = [
  {
    id: 1,
    from: "alice@example.com",
    subject: "Welcome to the dashboard!",
    body: "Hi there, welcome to your new admin dashboard.",
    date: "2024-06-01",
    read: false
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 2,
    from: "bob@example.com",
    subject: "Your weekly report",
    body: "Here is your weekly report. Let us know if you have questions.",
    date: "2024-06-02",
    read: true
  },
  {
    id: 3,
    from: "carol@example.com",
    subject: "System maintenance",
    body: "Scheduled maintenance will occur this weekend.",
    date: "2024-06-03",
    read: false
  },
  {
    id: 4,
    from: "dave@example.com",
    subject: "Meeting reminder",
    body: "Don't forget about the meeting tomorrow at 10am.",
    date: "2024-06-04",
    read: true
  },
  {
    id: 5,
    from: "eve@example.com",
    subject: "Security update",
    body: "Please update your password to keep your account secure.",
    date: "2024-06-05",
    read: false
  },
  {
    id: 6,
    from: "frank@example.com",
    subject: "New feature released",
    body: "Check out the new feature in your dashboard.",
    date: "2024-06-06",
    read: true
  }
]; // your existing list

const EmailList = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const emailsPerPage = 5;

  const filtered = dummyEmails.filter(email =>
    email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / emailsPerPage);
  const startIndex = (currentPage - 1) * emailsPerPage;
  const displayedEmails = filtered.slice(startIndex, startIndex + emailsPerPage);

  return (
    <div className="email-list">
      <input
        type="text"
        className="email-search"
        placeholder="🔍 Search emails..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // reset to page 1
        }}
      />

      {displayedEmails.map(email => (
        <div
          key={email.id}
          className={`email-item ${email.read ? 'read' : 'unread'}`}
          onClick={() => onSelect(email)}
        >
          <div className="email-header">
            <strong>{email.from}</strong>
            <span>{email.date}</span>
          </div>
          <div className="email-subject">{email.subject}</div>
          <p className="email-preview">{email.body}</p>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default EmailList;
