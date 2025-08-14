
  <header>
    <h1>Problems</h1>
    <p>Detailed Descriptions and Examples of Five Programming Tasks</p>
  </header>

  <!-- Problem 01 -->
  <section id="problem-01">
    <h2>Problem-01 : Train TT's Fine Calculator</h2>
    <p><strong>⚠ Function Name Must be:</strong> <code>totalFine()</code></p>
    <p>রুবিন নামের একজন TT প্রতিদিন ট্রেনে অসংখ্য যাত্রীকে জরিমানা করেন কারণ তারা হয় টিকিট হারিয়ে ফেলেছে অথবা কাটেনি। প্রতিবার জরিমানার হিসাব করতে সময় বেশি লাগে, তাই এই হিসাব স্বয়ংক্রিয় করার জন্য <code>totalFine()</code> ফাংশন তৈরি করতে হবে। ইনপুট ভুল বা ধনাত্মক সংখ্যা না হলে “Invalid” রিটার্ন করতে হবে।</p>
    <p>মোট জরিমানা = মূল ভাড়া + ২০% সারচার্জ + ৩০ টাকা সার্ভিস চার্জ</p>
    <h3>Sample</h3>
    <table>
      <thead>
        <tr><th>SAMPLE INPUT (number / invalid)</th><th>SAMPLE OUTPUT</th></tr>
      </thead>
      <tbody>
        <tr><td>200</td><td>270</td></tr>
        <tr><td>0</td><td>Invalid</td></tr>
        <tr><td>50</td><td>90</td></tr>
        <tr><td>552</td><td>692.4</td></tr>
        <tr><td>-35</td><td>Invalid</td></tr>
        <tr><td>"65"</td><td>Invalid</td></tr>
        <tr><td>"Gorib tai ticket katinai"</td><td>Invalid</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Problem 02 -->
  <section id="problem-02">
    <h2>Problem-02 : Clean &amp; Capitalize Characters</h2>
    <p><strong>⚠ Function Name Must be:</strong> <code>onlyCharacter()</code></p>
    <p>রাফি একজন এথিক্যাল হ্যাকার। সে অনেক বার্তা পায় যেখানে অপ্রয়োজনীয় স্পেস, ছোট হাতের, বড় হাতের অক্ষর, চিহ্ন ইত্যাদি থাকে। কাজ হলো: শুধু অক্ষর (এবং প্রয়োজনীয় চিহ্ন) রেখে বাকিগুলো বাদ দেওয়া এবং সবকিছু বড় হাতের অক্ষরে রূপান্তর করা। ইনপুট স্ট্রিং না হলে “Invalid” রিটার্ন করতে হবে।</p>
    <h3>Sample</h3>
    <table>
      <thead>
        <tr><th>SAMPLE INPUT (string)</th><th>SAMPLE OUTPUT (string)</th></tr>
      </thead>
      <tbody>
        <tr><td>"  h e llo wor   ld"</td><td>HELLOWORLD</td></tr>
        <tr><td>"Cy   bar- At  tac k  "</td><td>CYBAR-ATTACK</td></tr>
        <tr><td>" ha ck m e 1 @ru.c  n  "</td><td>HACKME1@RU.CN</td></tr>
        <tr><td>"Serv er : : Do wn"</td><td>SERVER::DOWN</td></tr>
        <tr><td>["hack", "me"]</td><td>Invalid</td></tr>
        <tr><td>true</td><td>Invalid</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Problem 03 -->
  <section id="problem-03">
    <h2>Problem-03 : FIFA Best Team Award</h2>
    <p><strong>⚠ Function Name Must be:</strong> <code>bestTeam()</code></p>
    <p>দুটি ফুটবল দলের ফাউল, হলুদ কার্ড, লাল কার্ডের তথ্য দেওয়া থাকবে। যেই দলের এই তিনটির যোগফল সবচেয়ে কম, সেই দল হবে সেরা। দুই দলের যোগফল সমান হলে “Tie” এবং ইনপুট অবজেক্ট না হলে “Invalid” রিটার্ন করতে হবে।</p>
    <h3>Sample</h3>
    <table>
      <thead>
        <tr><th>SAMPLE INPUT</th><th>SAMPLE OUTPUT (string)</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{ name: "Brazil", foul: 5, cardY: 1, cardR: 0 }, { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }</td>
          <td>Brazil</td>
        </tr>
        <tr>
          <td>{ name: "Germany", foul: 12, cardY: 0, cardR: 0 }, { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }</td>
          <td>Tie</td>
        </tr>
        <tr>
          <td>{ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, { name: "France", foul: 10, cardY: 2, cardR: 1 }</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>{ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France"</td>
          <td>Invalid</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Problem 04 -->
  <section id="problem-04">
    <h2>Problem-04 : Same Same But Different</h2>
    <p><strong>⚠ Function Name Must be:</strong> <code>isSame()</code></p>
    <p>দুটি Array-এর দৈর্ঘ্য সমান এবং প্রতিটি ইনডেক্সের মান ও টাইপ একই হলে true, অন্যথায় false রিটার্ন করতে হবে। ইনপুট Array না হলে “Invalid”।</p>
    <h3>Sample</h3>
    <table>
      <thead>
        <tr><th>SAMPLE INPUT</th><th>SAMPLE OUTPUT (boolean/string)</th></tr>
      </thead>
      <tbody>
        <tr><td>[1, 2, 3] , [1 , 2 , 3]</td><td>true</td></tr>
        <tr><td>[34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]</td><td>false</td></tr>
        <tr><td>[1, undefined , 3] , [1,null ,3]</td><td>false</td></tr>
        <tr><td>[1 , 4 , 5], [1 , 4 , 5]</td><td>true</td></tr>
        <tr><td>[1 , "4" , 4] ,[1 , 4  , 4]</td><td>false</td></tr>
        <tr><td>[2 , 5 , 6] ,256</td><td>Invalid</td></tr>
        <tr><td>{data: [2 , 5 , 6] } , [2 , 5 , 6]</td><td>Invalid</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Problem 05 -->
  <section id="problem-05">
    <h2>Problem-05 : Exam Result Report Generator</h2>
    <p><strong>⚠ Function Name Must be:</strong> <code>resultReport()</code></p>
    <p>একটি নাম্বারের Array ইনপুট নিয়ে গড় নম্বর, মোট পাস ও মোট ফেল সংখ্যা বের করে অবজেক্ট আকারে রিটার্ন করতে হবে। Array না হলে “Invalid”। গড় নম্বর পূর্ণসংখ্যা (rounded) হবে।</p>
    <h3>Sample</h3>
    <table>
      <thead>
        <tr><th>SAMPLE INPUT</th><th>SAMPLE OUTPUT (object / string)</th></tr>
      </thead>
      <tbody>
        <tr><td>[]</td><td>{ finalScore: 0 , pass: 0, fail: 0 }</td></tr>
        <tr><td>[98, 87, 67, 91, 92, 33, 87]</td><td>{ finalScore: 79, pass: 6, fail: 1 }</td></tr>
        <tr><td>[99, 87, 67, 12 ,87]</td><td>{ finalScore: 70, pass: 4, fail: 1 }</td></tr>
        <tr><td>[99]</td><td>{ finalScore: 99, pass: 1, fail: 0 }</td></tr>
        <tr><td>100</td><td>Invalid</td></tr>
      </tbody>
    </table>
  </section>

