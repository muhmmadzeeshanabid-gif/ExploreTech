import fs from 'fs';
import path from 'path';

const filePath = 'src/components/navbar/NavMenu.jsx';

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\\n');

    // Find the unique array
    let arrayStart = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('isArabic ? "الجميع" : "All"')) {
            arrayStart = i;
            break;
        }
    }

    if (arrayStart !== -1) {
        console.log("Matched Tabs Array at line " + (arrayStart + 1));
        
        // Find the start <div of the header (going backwards)
        let headerStart = -1;
        for (let i = arrayStart; i > arrayStart - 50; i--) {
            if (lines[i].includes('<div') && lines[i+1]?.includes('border-b border-slate-100 px-2 sm:px-8')) {
                headerStart = i;
                break;
            }
        }

        if (headerStart !== -1) {
            console.log("Found Header Start at line " + (headerStart + 1));
            
            // Find the end </div> of the header (going forwards)
            let headerEnd = -1;
            for (let i = arrayStart; i < arrayStart + 100; i++) {
                if (lines[i].includes('View More') && lines[i+1]?.trim().startsWith('</div>')) {
                    headerEnd = i + 1;
                    break;
                }
            }

            if (headerEnd !== -1) {
                console.log("Found Header End at line " + (headerEnd + 1));
                const newHeader = [
                    '                  <div ',
                    '                    className={`flex items-center px-2 sm:px-8 ${isArabic ? "flex-row-reverse" : ""}`} ',
                    '                    dir="ltr"',
                    '                  >',
                    '                    <button',
                    '                      className="flex sm:hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] transition hover:bg-[#0b56ff] hover:text-white"',
                    '                      onClick={() => scrollTabs("left")}',
                    '                    >',
                    '                      <ChevronLeft className="h-5 w-5" />',
                    '                    </button>',
                    '                    <div',
                    '                      className="flex flex-1 items-center gap-0 overflow-x-auto hide-scrollbar scroll-smooth sm:gap-10"',
                    '                      ref={tabsRef}',
                    '                      dir={isArabic ? "rtl" : "ltr"}',
                    '                    >',
                    '                      {[',
                    '                        isArabic ? "الجميع" : "All",',
                    '                        isArabic ? "الفئات الفرعية" : "Subcategories",',
                    '                        isArabic ? "المنتجات" : "Products",',
                    '                        isArabic ? "مزودوا الخدمات" : "Service Providers",',
                    '                        isArabic ? "المدونات" : "Blogs",',
                    '                        isArabic ? "الأخبار" : "News",',
                    '                      ].map((tab) => (',
                    '                        <button',
                    '                          key={tab}',
                    '                          onClick={() => setActiveTab(tab)}',
                    '                          className={`relative shrink-0 basis-1/2 py-3 text-center text-[12px] font-semibold transition-colors border-b-0 sm:basis-auto sm:text-[14px] ${',
                    '                            activeTab === tab',
                    '                              ? "text-[#0b56ff]"',
                    '                              : "text-slate-500 hover:text-slate-700"',
                    '                          }`}',
                    '                        >',
                    '                          {tab}',
                    '                          {activeTab === tab && (',
                    '                            <div className="absolute bottom-0 left-1/2 h-[2px] w-[40px] -translate-x-1/2 rounded-full bg-[#0b56ff]" />',
                    '                          )}',
                    '                        </button>',
                    '                      ))}',
                    '                    </div>',
                    '                    <button',
                    '                      className="flex sm:hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] transition hover:bg-[#0b56ff] hover:text-white"',
                    '                      onClick={() => scrollTabs("right")}',
                    '                    >',
                    '                      <ChevronRight className="h-5 w-5" />',
                    '                    </button>',
                    '                    <button',
                    '                      className="hidden sm:block text-[13px] shrink-0 font-semibold text-[#0b56ff] hover:underline"',
                    '                      style={{ fontFamily: \'"SF Pro Text", sans-serif\' }}',
                    '                    >',
                    '                      {isArabic ? "View More" : "View More"}',
                    '                    </button>',
                    '                  </div>'
                ];
                lines.splice(headerStart, headerEnd - headerStart + 1, ...newHeader);
                fs.writeFileSync(filePath, lines.join('\\n'), 'utf8');
                console.log("Updated Tabs Header successfully");
            } else {
                console.error("Header end not found");
            }
        } else {
            console.error("Header start not found");
        }
    } else {
        console.error("Tabs Array not found");
    }

    console.log("Done");
} catch (e) {
    console.error(JSON.stringify({message: e.message, stack: e.stack}));
    process.exit(1);
}
