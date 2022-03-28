
gantt.parse({
        data: [
          {id: 1, text: "Task #1", start_date: "2024-07-01", duration:5, parent:null, progress: 1},
          {id: 3, text: "Task #2", start_date: "2024-07-06", duration:2, parent:null, progress: 0.5},
          {id: 5, text: "Task #3.1", start_date: "2024-07-09", duration:25, parent:null, progress: 0.2},
          {id: 6, text: "Task #3.2", start_date: "2024-07-11", duration:1, parent:null, progress: 0}
        ]
      });
