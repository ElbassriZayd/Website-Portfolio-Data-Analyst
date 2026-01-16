import { jsPDF } from "jspdf";

export const generateResume = () => {
  const doc = new jsPDF();
  const lineHeight = 7;
  let cursorY = 20;
  const pageHeight = doc.internal.pageSize.height;
  const leftMargin = 20;
  const contentWidth = 170;

  // Helper to add text and advance cursor
  const addText = (text: string, x: number, fontSize: number, fontType: string = "normal", color: string = "#000000") => {
    doc.setFont("helvetica", fontType);
    doc.setFontSize(fontSize);
    doc.setTextColor(color);
    
    // Check for page break
    if (cursorY > pageHeight - 20) {
      doc.addPage();
      cursorY = 20;
    }

    const splitText = doc.splitTextToSize(text, contentWidth);
    doc.text(splitText, x, cursorY);
    cursorY += (splitText.length * lineHeight * (fontSize / 12)); // Approx line height scaling
  };

  const addGap = (size: number) => {
    cursorY += size;
  };

  // --- HEADER ---
  addText("Zayd Elbassri", leftMargin, 22, "bold", "#000000");
  addGap(-5);
  addText("Consultant BI / Data Analyst", leftMargin, 14, "normal", "#666666");
  addGap(5);
  
  // Contact Info
  doc.setLineWidth(0.5);
  doc.line(leftMargin, cursorY, 190, cursorY);
  addGap(5);
  
  addText("Email: zayd.elbassri01@gmail.com  |  Phone: +212 648 941 679", leftMargin, 10);
  addText("Location: Casablanca, Morocco", leftMargin, 10);
  addText("LinkedIn: linkedin.com/in/zayd-el-bassri", leftMargin, 10);
  addGap(8);

  // --- SUMMARY ---
  addText("PROFESSIONAL SUMMARY", leftMargin, 12, "bold", "#06b6d4"); // Cyan color
  addGap(2);
  addText(
    "Expert in Business Intelligence and Data Analyst, holding a Master's in Decision Informatics. Specialized in end-to-end BI solutions: Data Warehousing (SQL/SSIS), Modeling (SSAS/MDX), and Visualization (Power BI). Proven track record in transforming complex data into strategic KPIs and optimizing operations using Machine Learning.",
    leftMargin, 10
  );
  addGap(8);

  // --- SKILLS ---
  addText("CORE COMPETENCIES", leftMargin, 12, "bold", "#06b6d4");
  addGap(2);
  addText("Data Analytics & BI: Power BI, SSIS, SSAS, MDX, DAX, SQL, Tableau, KPI Design", leftMargin, 10);
  addText("Data Science & ML: Python, Scikit-learn, TensorFlow, Deep Learning, NLP", leftMargin, 10);
  addText("Big Data & Engineering: PySpark, Hadoop, ETL Pipelines", leftMargin, 10);
  addGap(8);

  // --- EXPERIENCE ---
  addText("PROFESSIONAL EXPERIENCE", leftMargin, 12, "bold", "#06b6d4");
  addGap(2);

  // Experience 0 (New)
  addText("Auto-formation & End-to-End Project (FinTech/Telco)", leftMargin, 11, "bold");
  addText("July 2025 - Present", leftMargin, 10, "italic", "#555555");
  addText("• MLOps & Deployment: Developed Churn Prediction model (XGBoost) via Docker & FastAPI.", leftMargin + 5, 10);
  addText("• BI: Created real-time Power BI dashboard connected to predictions for risk analysis.", leftMargin + 5, 10);
  addText("• Data Pipeline: Automated ETL processes using SQL and Python.", leftMargin + 5, 10);
  addGap(4);

  // Experience 1
  addText("R&D Data Science Engineer | LISAC Lab, Fes", leftMargin, 11, "bold");
  addText("Nov 2024 - Jun 2025", leftMargin, 10, "italic", "#555555");
  addText("• Developed ML models (SVM, RF, XGBoost) with 90% accuracy for healthcare needs prediction.", leftMargin + 5, 10);
  addText("• Optimized logistics using NSGA-II & SPEA2 algorithms, reducing costs by 12%.", leftMargin + 5, 10);
  addGap(4);

  // Experience 2
  addText("Freelance - AI Software Engineer (Python) | G2i Inc", leftMargin, 11, "bold");
  addText("Aug 2024 - Oct 2024 | Remote", leftMargin, 10, "italic", "#555555");
  addText("• Evaluated AI-generated code across multiple languages, achieving 98% production readiness.", leftMargin + 5, 10);
  addText("• Refactored code to improve accuracy and performance, reducing execution time by 30%.", leftMargin + 5, 10);
  addText("• Optimized RLHF pipeline, increasing model precision by 12%.", leftMargin + 5, 10);
  addGap(8);

  // --- PROJECTS ---
  addText("KEY PROJECTS", leftMargin, 12, "bold", "#06b6d4");
  addGap(2);
  
  addText("Healthcare Needs Prediction & Routing Optimization", leftMargin, 11, "bold");
  addText("Developed a complete pipeline for predicting patient needs and optimizing nurse routes using Python and Genetic Algorithms.", leftMargin + 5, 10);
  addGap(2);

  addText("Churn Prediction System (End-to-End)", leftMargin, 11, "bold");
  addText("Deployed XGBoost model via FastAPI & Docker. Created real-time Power BI dashboard for at-risk clients.", leftMargin + 5, 10);
  addGap(2);

  addText("CNN Defect Detection (VGG16)", leftMargin, 11, "bold");
  addText("Achieved 95% accuracy in detecting defects in photovoltaic modules. Deployed via Streamlit.", leftMargin + 5, 10);
  addGap(8);

  // --- EDUCATION ---
  addText("EDUCATION", leftMargin, 12, "bold", "#06b6d4");
  addGap(2);
  addText("Master: Decision Informatics & Intelligent Vision", leftMargin, 11, "bold");
  addText("Faculte des Sciences Dhar El Mahraz, Fes | 2022 - 2024", leftMargin, 10);
  addGap(2);
  addText("Bachelor: Mathematics & Computer Science", leftMargin, 11, "bold");
  addText("Faculte des Sciences Dhar El Mahraz, Fes | 2019 - 2022", leftMargin, 10);
  
  // Save the PDF
  doc.save("DATA ANALYST ELBASSRI ZAYD.pdf");
};