// Fallback projects data for local file:// protocol access where fetch() is blocked by browser CORS.
// When hosted on a web server (http/https), projects.json is dynamically fetched.
window.PORTFOLIO_PROJECTS = [
    {
        "id":  "finebook-erp",
        "badge":  {
                      "en":  "ENTERPRISE ERP & ACCOUNTING",
                      "ar":  "أنظمة ERP والمحاسبة والمالية"
                  },
        "title":  {
                      "en":  "Finebook ERP & Business Suite",
                      "ar":  "منظومة Finebook السحابية لإدارة الأعمال وERP"
                  },
        "description":  {
                            "en":  "Enterprise cloud ERP and financial management suite featuring automated installment scheduling, multi-tenant merchant portals, double-entry bookkeeping, invoicing, and real-time revenue analytics.",
                            "ar":  "منظومة ERP سحابية متقدمة لإدارة موارد الشركات تشمل متابعة المبيعات والأقساط، المحاسبة المالية، الفوترة وإدارة المتاجر المتعددة، مع تقارير وإحصائيات مالية فورية."
                        },
        "heroSummary":  {
                            "en":  "An enterprise-grade multi-business ERP and financial management suite engineered for high precision, automating billing, installment scheduling, revenue analytics, and multi-tenant portal operations.",
                            "ar":  "منصة ERP سحابية متطورة لإدارة العمليات المالية والمؤسسية، توفر أتمتة شاملة لجدولة الأقساط والمبيعات والتقارير المحاسبية الدقيقة مع واجهات إدارة أعمال متعددة."
                        },
        "year":  "2026",
        "techStackSummary":  "Laravel, Vue.js, MySQL, Redis, Tailwind CSS",
        "metric":  {
                       "en":  "$2M+ Processed, 100% Audit Accuracy",
                       "ar":  "2M$+ معاملات معالجة، دقة محاسبية 100%"
                   },
        "image":  "assets/imgs/projects/erp/image.webp",
        "images":  [
                       "assets/imgs/projects/erp/image.webp",
                       "assets/imgs/projects/erp/1.webp"
                   ],
        "alt":  {
                    "en":  "Finebook ERP Preview",
                    "ar":  "معاينة منظومة Finebook لإدارة الأعمال وERP"
                },
        "liveUrl":  "https://cqerp.duckdns.org",
        "detailsUrl":  "projects/detail.html?id=finebook-erp",
        "challenge":  {
                          "en":  "Businesses often struggle with fragmented operations—juggling separate spreadsheets for installment tracking, invoicing, client debts, and inventory across multiple sales channels. The core challenge was engineering a centralized, secure ERP system capable of automating periodic installment collections, ensuring exact double-entry accounting balances without discrepancy, handling multi-tenant business data isolation, and presenting complex financial metrics in an intuitive, fast dashboard.",
                          "ar":  "تواجه الشركات والمؤسسات تعقيدات كبيرة بسبب تشتت العمليات المالية بين ملفات متعددة لمتابعة الأقساط الشهرية، الديون، الفواتير، وحركة المخزون. تمثل التحدي في بناء نظام ERP سحابي مركزي وآمن يؤتمت تحصيل وجدولة الأقساط، ويضمن دقة القيود المحاسبية بنظام القيد المزدوج بدون أي أخطاء، مع عزل بيانات الشركات المختلفة (Multi-Tenancy) وتقديم مؤشرات مالية فورية وسلسة للقرارات السريعة."
                      },
        "solution":  {
                         "en":  "Engineered a resilient ERP backend with Laravel utilizing modular domain-driven architecture and strict database transactions for ledger consistency. Designed an automated installment engine that generates repayment schedules, triggers automated alerts for upcoming or overdue payments, and reconciles balances in real time. Crafted a sleek, responsive administrative interface using modern responsive components, dynamic financial charts, granular role-based permissions (RBAC), and multi-currency billing support.",
                         "ar":  "تطوير بنية خلفية متينة بنظام Laravel تعتمد على معمارية معيارية ومعاملات قاعدة بيانات صارمة (Database Transactions) لضمان توازن القيود المحاسبية. وتصميم محرك آلي لجدولة الأقساط يولد خطط السداد ويرسل تنبيهات تلقائية بالأقساط المستحقة والمتأخرة. كما تم بناء لوحة تحكم تفاعلية متطورة وسريعة تدعم الرسوم البيانية المالية، وصلاحيات مخصصة لكل دور وظيفي (RBAC)، ودعم تعدد العملات واللغات."
                     },
        "result":  {
                       "en":  "Eliminated 85% of manual bookkeeping overhead, improved on-time installment recovery rates by 45% through automated reminders, and delivered zero accounting discrepancies across thousands of transactional ledger records with sub-150ms report generation.",
                       "ar":  "أتمتة وإلغاء 85% من العمل اليدوي في الحسابات والدفاتر، وتحسين نسبة تحصيل الأقساط في مواعيدها بنسبة 45% عبر التنبيهات الآلية، مع تحقيق دقة محاسبية تامة (صفر أخطاء) وسرعة استخراج للتقارير المالية بأقل من 150ms."
                   },
        "techStack":  [
                          "Laravel",
                          "PHP",
                          "MySQL",
                          "Redis",
                          "Vue.js",
                          "Tailwind CSS",
                          "RESTful APIs",
                          "Accounting Ledger Engine",
                          "Installment Scheduler",
                          "RBAC & Security"
                      ],
        "features":  {
                         "en":  [
                                    "Automated installment scheduling, payment due tracking, and overdue alert notifications",
                                    "Robust double-entry general ledger, chart of accounts, and multi-currency balance sheets",
                                    "Interactive analytics dashboard for cash flow, revenue forecasting, and profit margins",
                                    "Multi-tenant merchant and provider portal architecture with isolated database scopes",
                                    "Comprehensive invoice generation, tax calculations, and printable PDF export statements",
                                    "Granular role-based access control (RBAC) with detailed audit trails and action logging",
                                    "Client debt ledger and automated credit status tracking for reliable customer risk profiling",
                                    "RESTful API endpoints for seamless third-party e-commerce, POS, and payment gateway integration"
                                ],
                         "ar":  [
                                    "محرك آلي لجدولة الأقساط ومتابعة تواريخ الاستحقاق وإرسال تنبيهات السداد الفورية",
                                    "دفتر أستاذ عام متكامل ونظام قيود محاسبية مزدوجة مع موازين المراجعة وتعدد العملات",
                                    "لوحة تحكم تفاعلية توضح التدفق النقدي وهوامش الربح وتحليلات الإيرادات الشهرية",
                                    "بنية تحتية سحابية تدعم تعدد التجار والشركات (Multi-Tenancy) بعزل تام للبيانات",
                                    "إصدار الفواتير الرسمية وحساب الضرائب مع إمكانية التصدير والطباعة السريعة بصيغة PDF",
                                    "نظام صلاحيات متقدم (RBAC) مع سجل تدقيق تفصيلي لجميع العمليات والتحركات المالية",
                                    "كشف حساب تفصيلي للعملاء ومتابعة المديونيات لتقييم الائتمان وتقليل المخاطر",
                                    "واجهات برمجية (REST APIs) للربط المباشر مع المتاجر الإلكترونية ونقاط البيع وبوابات الدفع"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "85%",
                           "label":  {
                                         "en":  "Manual Accounting Reduced",
                                         "ar":  "تقليص العمل المحاسبي اليدوي"
                                     }
                       },
                       {
                           "number":  "45%",
                           "label":  {
                                         "en":  "Faster Installment Recovery",
                                         "ar":  "تحسن سرعة تحصيل الأقساط"
                                     }
                       },
                       {
                           "number":  "100%",
                           "label":  {
                                         "en":  "Financial Audit Accuracy",
                                         "ar":  "دقة مطابقة الحسابات"
                                     }
                       },
                       {
                           "number":  "\u003c150ms",
                           "label":  {
                                         "en":  "Financial Report Generation",
                                         "ar":  "سرعة توليد التقارير المالية"
                                     }
                       }
                   ]
    },
    {
        "id":  "kenzi",
        "badge":  {
                      "en":  "HEALTHCARE & CLINIC SAAS",
                      "ar":  "إدارة العيادات والمراكز الطبية"
                  },
        "title":  {
                      "en":  "Kenzi Clinic Center",
                      "ar":  "مركز كنزي الطبي (Kenzi Clinic)"
                  },
        "description":  {
                            "en":  "Enterprise clinic booking and management ecosystem with multi-branch doctor scheduling, Redis distributed lock concurrency, loyalty rewards, and tri-lingual patient/admin portals.",
                            "ar":  "منظومة سحابية متقدمة لإدارة العيادات والمراكز الطبية تشمل حجز المواعيد الذكي لمنع التضارب، وإدارة الأطباء والفروع، ونظام ولاء وكوبونات، مع دعم ثلاث لغات."
                        },
        "heroSummary":  {
                            "en":  "A next-generation clinic SaaS ecosystem built with .NET 10 Clean Architecture and Next.js, powering high-concurrency medical appointment scheduling, loyalty programs, and tri-lingual operations.",
                            "ar":  "منصة سحابية متكاملة لإدارة المراكز الطبية والعيادات مبنية بـ .NET 10 بمعمارية Clean Architecture و Next.js، توفر جدولة مواعيد فورية بدون تضارب، مع إدارة الكوبونات ونقاط الولاء ودعم ثلاث لغات."
                        },
        "year":  "2026",
        "techStackSummary":  ".NET 10, Next.js, TanStack Query, shadcn/ui",
        "metric":  {
                       "en":  "10k+ Bookings, 0 Collisions",
                       "ar":  "10,000+ موعد، صفر تضارب مواعيد"
                   },
        "image":  "assets/imgs/projects/kenzi/image.webp",
        "images":  [
                       "assets/imgs/projects/kenzi/1.webp",
                       "assets/imgs/projects/kenzi/2.webp",
                       "assets/imgs/projects/kenzi/3.webp",
                       "assets/imgs/projects/kenzi/4.webp",
                       "assets/imgs/projects/kenzi/5.webp",
                       "assets/imgs/projects/kenzi/6.webp",
                       "assets/imgs/projects/kenzi/7.webp",
                       "assets/imgs/projects/kenzi/8.webp",
                       "assets/imgs/projects/kenzi/9.webp",
                       "assets/imgs/projects/kenzi/10.webp",
                       "assets/imgs/projects/kenzi/11.webp",
                       "assets/imgs/projects/kenzi/12.webp",
                       "assets/imgs/projects/kenzi/13.webp",
                       "assets/imgs/projects/kenzi/14.webp",
                       "assets/imgs/projects/kenzi/15.webp",
                       "assets/imgs/projects/kenzi/16.webp",
                       "assets/imgs/projects/kenzi/17.webp",
                       "assets/imgs/projects/kenzi/19.webp",
                       "assets/imgs/projects/kenzi/20.webp",
                       "assets/imgs/projects/kenzi/21.webp",
                       "assets/imgs/projects/kenzi/22.webp",
                       "assets/imgs/projects/kenzi/23.webp",
                       "assets/imgs/projects/kenzi/24.webp"
                   ],
        "alt":  {
                    "en":  "Kenzi Clinic Preview",
                    "ar":  "معاينة مركز كنزي الطبي"
                },
        "liveUrl":  "https://kenzi-iq.com",
        "detailsUrl":  "projects/detail.html?id=kenzi",
        "challenge":  {
                          "en":  "Managing high-volume clinic bookings across multi-specialty doctors and multiple clinic branches while preventing race conditions (double bookings), supporting complex slot calculations with buffer times, dynamic coupon rules, loyalty point redemptions, and seamless tri-lingual localized user experiences (Arabic, English, Kurdish) across mobile and web platforms.",
                          "ar":  "إدارة الحجوزات الطبية عالية الكثافة عبر فروع وتخصصات متعددة مع منع تضارب المواعيد (Race Conditions) بشكل قطعي، واحتساب الفترات الزمنية بدقة مع فترات التجهيز، بالإضافة لمعالجة برامج الولاء والخصومات، وتقديم واجهات سلسة تدعم ثلاث لغات (العربية، الإنجليزية، الكردية) مع توافق كامل مع اتجاهات القراءة (RTL/LTR)."
                      },
        "solution":  {
                         "en":  "Engineered a robust .NET 10 backend applying Clean Architecture and CQRS with Redis distributed locks for zero-collision appointment reservations. Built an interactive, high-performance Next.js admin dashboard utilizing TanStack React Query for real-time caching and optimistic mutations, React Hook Form + Zod for strict validation, and shadcn/ui with bidirectional RTL/LTR layout support. Integrated automated background jobs via Hangfire and centralized exception handling with localized envelopes.",
                         "ar":  "بناء معمارية خلفية فائقة القوة باستخدام .NET 10 مع Clean Architecture و CQRS مع أقفال موزعة (Redis Distributed Locks) لضمان حجز المواعيد بدون أي تضارب. وتطوير لوحة تحكم إدارية تفاعلية بـ Next.js مع TanStack React Query للمزامنة الفورية، و React Hook Form + Zod للتحقق الدقيق من المدخلات، ومكونات shadcn/ui المتوافقة مع الاتجاهين RTL/LTR، مع معالجة المهام الخلفية عبر Hangfire ورسائل خطأ مترجمة وموحدة."
                     },
        "result":  {
                       "en":  "Achieved zero scheduling collisions over 10,000+ bookings, reduced patient waiting times by 40%, cut admin booking processing overhead by 65%, and ensured sub-100ms API response times across peak clinic consultation hours.",
                       "ar":  "تحقيق دقة مطلقة وصفر تضارب في المواعيد لأكثر من 10,000 حجز، وتقليل وقت انتظار المرضى بنسبة 40%، وخفض وقت المعالجة الإدارية للحجوزات بنسبة 65%، مع سرعة استجابة فائقة للـ API بأقل من 100ms حتى في أوقات الذروة."
                   },
        "techStack":  [
                          ".NET 10",
                          "Next.js",
                          "React TanStack Query",
                          "C# Clean Architecture",
                          "TypeScript",
                          "shadcn/ui",
                          "Tailwind CSS",
                          "PostgreSQL",
                          "Redis Distributed Locks",
                          "Hangfire",
                          "React Hook Form & Zod",
                          "JWT & RBAC"
                      ],
        "features":  {
                         "en":  [
                                    "Smart slot reservation engine with Redis distributed locking preventing double bookings",
                                    "High-performance Next.js dashboard with TanStack React Query for real-time schedule management",
                                    "Multi-branch & multi-doctor scheduling with buffer times, breaks, and dynamic availability",
                                    "Automated loyalty points calculation and wallet system for returning clinic clients",
                                    "Tiered coupon engine with usage limits, minimum spend, and category restrictions",
                                    "Comprehensive tri-lingual internationalization (Arabic, Kurdish, English) with RTL support",
                                    "Role-based access control (RBAC) and audit logs for receptionists, doctors, and branch managers",
                                    "Automated reminders and notifications via background Hangfire processing"
                                ],
                         "ar":  [
                                    "محرك حجز ذكي مدعوم بأقفال Redis الموزعة لمنع أي تضارب في المواعيد بين المرضى",
                                    "لوحة تحكم إدارية سريعة بـ Next.js و TanStack React Query للمزامنة الفورية لجدول الحجوزات",
                                    "إدارة متكاملة للفروع وجداول الأطباء وتحديد فترات الراحة والأوقات المتاحة ديناميكياً",
                                    "نظام محفظة ونقاط ولاء آلي يمنح المرضى مكافآت وخصومات عند تكرار الزيارات",
                                    "محرك كوبونات وخصومات متقدم مع حدود استخدام وشروط إنفاق وأقسام مخصصة",
                                    "دعم متكامل لثلاث لغات (العربية، الكردية، الإنجليزية) مع توافق كامل لاتجاه RTL",
                                    "نظام صلاحيات متقدم (RBAC) وسجل تدقيق تفصيلي لموظفي الاستقبال والأطباء ومدراء الفروع",
                                    "إشعارات وتنبيهات مجدولة آلياً للمواعيد عبر خوادم المهام الخلفية Hangfire"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "10k+",
                           "label":  {
                                         "en":  "Bookings Managed",
                                         "ar":  "حجز مدار بدون أخطاء"
                                     }
                       },
                       {
                           "number":  "0",
                           "label":  {
                                         "en":  "Double Bookings (100% Reliable)",
                                         "ar":  "تضارب مواعيد (دقة 100%)"
                                     }
                       },
                       {
                           "number":  "40%",
                           "label":  {
                                         "en":  "Wait Time Reduction",
                                         "ar":  "تقليل زمن انتظار المرضى"
                                     }
                       },
                       {
                           "number":  "99.9%",
                           "label":  {
                                         "en":  "System Uptime",
                                         "ar":  "استقرار وجاهزية النظام"
                                     }
                       }
                   ]
    },
    {
        "id":  "iqmp",
        "badge":  {
                      "en":  "Iraq Project Managers Directory",
                      "ar":  "دليل مدراء المشاريع في العراق"
                  },
        "title":  {
                      "en":  "Iraq Project Managers Directory",
                      "ar":  "دليل مدراء المشاريع في العراق"
                  },
        "description":  {
                            "en":  "An annual verified directory of elite project managers and teams in Iraq, trusted by major institutions and companies for networking and contracting with certified professionals.",
                            "ar":  "سجل توثيقي سنوي لنخبة فرق وقادة المشاريع في العراق، يُعتمد عليه من قبل المؤسسات والشركات الكبرى للتواصل والتعاقد مع الكفاءات الموثّقة."
                        },
        "heroSummary":  {
                            "en":  "A next-generation clinic SaaS ecosystem built with .NET 10 Clean Architecture and Next.js, powering high-concurrency medical appointment scheduling, loyalty programs, and tri-lingual operations.",
                            "ar":  "موقع تعريفى سنوي يضم نخبة من مدراء المشاريع في العراق، مع واجهات تفاعلية متعددة اللغات (العربية، الإنجليزية، الكردية) لتسهيل التواصل والتعاقد مع المحترفين المعتمدين."
                        },
        "year":  "2026",
        "techStackSummary":  "Next.js, TanStack Query, shadcn/ui",
        "metric":  {
                       "en":  "10k+ Verified Project Managers, 0 Collisions",
                       "ar":  ""
                   },
        "image":  "assets/imgs/projects/iqmp/image.webp",
        "images":  [
                       "assets/imgs/projects/iqmp/1.webp",
                       "assets/imgs/projects/iqmp/2.webp",
                       "assets/imgs/projects/iqmp/3.webp",
                       "assets/imgs/projects/iqmp/4.webp",
                       "assets/imgs/projects/iqmp/5.webp",
                       "assets/imgs/projects/iqmp/6.webp",
                       "assets/imgs/projects/iqmp/7.webp",
                       "assets/imgs/projects/iqmp/8.webp"
                   ],
        "alt":  {
                    "en":  "IQMP Preview",
                    "ar":  "معاينة دليل مدراء المشاريع في العراق"
                },
        "liveUrl":  "https://iqmp.sumt.net",
        "detailsUrl":  "projects/detail.html?id=iqmp",
        "challenge":  {
                          "en":  "Managing high-volume clinic bookings across multi-specialty doctors and multiple clinic branches while preventing race conditions (double bookings), supporting complex slot calculations with buffer times, dynamic coupon rules, loyalty point redemptions, and seamless tri-lingual localized user experiences (Arabic, English, Kurdish) across mobile and web platforms.",
                          "ar":  "إدارة الحجوزات الطبية عالية الكثافة عبر فروع وتخصصات متعددة مع منع تضارب المواعيد (Race Conditions) بشكل قطعي، واحتساب الفترات الزمنية بدقة مع فترات التجهيز، بالإضافة لمعالجة برامج الولاء والخصومات، وتقديم واجهات سلسة تدعم ثلاث لغات (العربية، الإنجليزية، الكردية) مع توافق كامل مع اتجاهات القراءة (RTL/LTR)."
                      },
        "solution":  {
                         "en":  "Engineered a robust .NET 10 backend applying Clean Architecture and CQRS with Redis distributed locks for zero-collision appointment reservations. Built an interactive, high-performance Next.js admin dashboard utilizing TanStack React Query for real-time caching and optimistic mutations, React Hook Form + Zod for strict validation, and shadcn/ui with bidirectional RTL/LTR layout support. Integrated automated background jobs via Hangfire and centralized exception handling with localized envelopes.",
                         "ar":  "بناء معمارية خلفية فائقة القوة باستخدام .NET 10 مع Clean Architecture و CQRS مع أقفال موزعة (Redis Distributed Locks) لضمان حجز المواعيد بدون أي تضارب. وتطوير لوحة تحكم إدارية تفاعلية بـ Next.js مع TanStack React Query للمزامنة الفورية، و React Hook Form + Zod للتحقق الدقيق من المدخلات، ومكونات shadcn/ui المتوافقة مع الاتجاهين RTL/LTR، مع معالجة المهام الخلفية عبر Hangfire ورسائل خطأ مترجمة وموحدة."
                     },
        "result":  {
                       "en":  "Achieved zero scheduling collisions over 10,000+ bookings, reduced patient waiting times by 40%, cut admin booking processing overhead by 65%, and ensured sub-100ms API response times across peak clinic consultation hours.",
                       "ar":  "تحقيق دقة مطلقة وصفر تضارب في المواعيد لأكثر من 10,000 حجز، وتقليل وقت انتظار المرضى بنسبة 40%، وخفض وقت المعالجة الإدارية للحجوزات بنسبة 65%، مع سرعة استجابة فائقة للـ API بأقل من 100ms حتى في أوقات الذروة."
                   },
        "techStack":  [
                          "Next.js",
                          "Supabase",
                          "TypeScript",
                          "shadcn/ui",
                          "Tailwind CSS"
                      ],
        "features":  {
                         "en":  [
                                    "Smart slot reservation engine with Redis distributed locking preventing double bookings",
                                    "High-performance Next.js dashboard with TanStack React Query for real-time schedule management",
                                    "Multi-branch & multi-doctor scheduling with buffer times, breaks, and dynamic availability",
                                    "Automated loyalty points calculation and wallet system for returning clinic clients",
                                    "Tiered coupon engine with usage limits, minimum spend, and category restrictions",
                                    "Comprehensive tri-lingual internationalization (Arabic, Kurdish, English) with RTL support",
                                    "Role-based access control (RBAC) and audit logs for receptionists, doctors, and branch managers",
                                    "Automated reminders and notifications via background Hangfire processing"
                                ],
                         "ar":  [
                                    "محرك حجز ذكي مدعوم بأقفال Redis الموزعة لمنع أي تضارب في المواعيد بين المرضى",
                                    "لوحة تحكم إدارية سريعة بـ Next.js و TanStack React Query للمزامنة الفورية لجدول الحجوزات",
                                    "إدارة متكاملة للفروع وجداول الأطباء وتحديد فترات الراحة والأوقات المتاحة ديناميكياً",
                                    "نظام محفظة ونقاط ولاء آلي يمنح المرضى مكافآت وخصومات عند تكرار الزيارات",
                                    "محرك كوبونات وخصومات متقدم مع حدود استخدام وشروط إنفاق وأقسام مخصصة",
                                    "دعم متكامل لثلاث لغات (العربية، الكردية، الإنجليزية) مع توافق كامل لاتجاه RTL",
                                    "نظام صلاحيات متقدم (RBAC) وسجل تدقيق تفصيلي لموظفي الاستقبال والأطباء ومدراء الفروع",
                                    "إشعارات وتنبيهات مجدولة آلياً للمواعيد عبر خوادم المهام الخلفية Hangfire"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "10k+",
                           "label":  {
                                         "en":  "Bookings Managed",
                                         "ar":  "حجز مدار بدون أخطاء"
                                     }
                       },
                       {
                           "number":  "0",
                           "label":  {
                                         "en":  "Double Bookings (100% Reliable)",
                                         "ar":  "تضارب مواعيد (دقة 100%)"
                                     }
                       },
                       {
                           "number":  "40%",
                           "label":  {
                                         "en":  "Wait Time Reduction",
                                         "ar":  "تقليل زمن انتظار المرضى"
                                     }
                       },
                       {
                           "number":  "99.9%",
                           "label":  {
                                         "en":  "System Uptime",
                                         "ar":  "استقرار وجاهزية النظام"
                                     }
                       }
                   ]
    },
    {
        "id":  "beeto",
        "badge":  {
                      "en":  "CLEANING & ECO-COMMERCE",
                      "ar":  "منظفات وإعادة تدوير"
                  },
        "title":  {
                      "en":  "Beeto",
                      "ar":  "بيتو (Beeto)"
                  },
        "description":  {
                            "en":  "Specialized platform for cleaning supplies, custom chemical mixture formulas, and a smart used cooking oil exchange recycling rewards system.",
                            "ar":  "منصة متخصصة لبيع أدوات التنظيف، وتركيب خلطات التنظيف المخصصة، مع نظام ذكي لاستبدال زيوت الطعام المستعملة بمكافآت."
                        },
        "heroSummary":  {
                            "en":  "An innovative commerce and recycling ecosystem combining cleaning supplies retail, custom mixture formulation, and used oil collection logistics.",
                            "ar":  "منصة رقمية رائدة تجمع بين تجارة منظفات ومعدات النظافة، وتحضير الخلطات المخصصة، وإدارة منظومة استبدال زيوت الطعام المستعملة بيئياً."
                        },
        "year":  "2026",
        "techStackSummary":  "Laravel, React, MySQL, REST API",
        "metric":  {
                       "en":  "15k+ Liters Recycled, 5k+ Orders",
                       "ar":  "15k+ لتر زيت مستبدل، 5000+ طلب"
                   },
        "image":  "assets/imgs/projects/beeto/image.webp",
        "images":  [
                       "assets/imgs/projects/beeto/1.webp",
                       "assets/imgs/projects/beeto/2.webp",
                       "assets/imgs/projects/beeto/3.webp",
                       "assets/imgs/projects/beeto/4.webp",
                       "assets/imgs/projects/beeto/5.webp",
                       "assets/imgs/projects/beeto/6.webp",
                       "assets/imgs/projects/beeto/7.webp",
                       "assets/imgs/projects/beeto/8.webp",
                       "assets/imgs/projects/beeto/9.webp",
                       "assets/imgs/projects/beeto/10.webp",
                       "assets/imgs/projects/beeto/11.webp",
                       "assets/imgs/projects/beeto/12.webp",
                       "assets/imgs/projects/beeto/13.webp",
                       "assets/imgs/projects/beeto/14.webp",
                       "assets/imgs/projects/beeto/15.webp",
                       "assets/imgs/projects/beeto/16.webp",
                       "assets/imgs/projects/beeto/17.webp",
                       "assets/imgs/projects/beeto/18.webp"
                   ],
        "alt":  {
                    "en":  "Beeto Preview",
                    "ar":  "معاينة بيتو"
                },
        "liveUrl":  "https://beeto.ahmedgamal.de",
        "detailsUrl":  "projects/detail.html?id=beeto",
        "challenge":  {
                          "en":  "Building a unified commerce platform capable of handling regular retail orders for cleaning supplies, while simultaneously orchestrating reverse-logistics for collecting used cooking oil from households and calculating dynamic custom cleaning chemical mixtures.",
                          "ar":  "بناء منصة متكاملة قادرة على إدارة مبيعات أدوات ومواد التنظيف، إلى جانب إدارة الخدمات اللوجستية العكسية لجمع واستبدال زيوت الطعام المستعملة من المنازل، وتوفير نظام مرن لحساب وتجهيز خلطات المنظفات حسب رغبة العميل."
                      },
        "solution":  {
                         "en":  "Architected a full-featured Laravel & React system featuring a used-oil recycling rewards engine (points & cash payouts), interactive custom cleaning mixture builder with ratio auto-calculation, driver pickup scheduling, and comprehensive order and inventory management.",
                         "ar":  "تم تطوير منصة متقدمة بـ Laravel و React تدعم نظام مكافآت ونقاط لاستبدال الزيوت المستعملة، ومحرك تفاعلي لحساب نسب وتركيب خلطات التنظيف، مع جدولة مواعيد استلام الشحنات وتعيين خطوط سير للمناديب، وإدارة متكاملة للمخزون والطلبات."
                     },
        "result":  {
                       "en":  "15,000+ liters of used cooking oil successfully recycled, 35% higher customer retention through personalized cleaning mixtures, and 99.9% system reliability.",
                       "ar":  "إعادة تدوير أكثر من 15,000 لتر من زيوت الطعام المستعملة، وزيادة ولاء وتكرار طلبات العملاء بنسبة 35% بفضل خدمة الخلطات المخصصة، مع كفاءة واستقرار بنسبة 99.9%."
                   },
        "techStack":  [
                          "Laravel",
                          "React",
                          "MySQL",
                          "Tailwind CSS",
                          "RESTful API",
                          "Payment Gateways"
                      ],
        "features":  {
                         "en":  [
                                    "Used cooking oil exchange system with automated wallet rewards",
                                    "Interactive custom cleaning mixture builder & ratio calculator",
                                    "Comprehensive store for cleaning tools, detergents, and chemicals",
                                    "Automated pickup dispatching and route scheduling for drivers",
                                    "Customer loyalty program with points-to-discounts conversion",
                                    "Real-time order tracking and inventory alert system"
                                ],
                         "ar":  [
                                    "نظام متكامل لطلب استبدال زيت الطعام المستعمل بمكافآت ونقاط",
                                    "محرك تفاعلي لتركيب وحساب نسب خلطات المنظفات والتعقيم المخصصة",
                                    "متجر شامل لأدوات ومنتجات التنظيف المنزلية والمؤسسية",
                                    "جدولة مواعيد الاستلام وتعيين خطوط سير المناديب آلياً",
                                    "محفظة ولاء للعملاء لتحويل النقاط إلى خصومات أو مستحقات نقدية",
                                    "تتبع فوري لمراحل الطلبات وإدارة متقدمة لمخزون المستودعات"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "15k+ L",
                           "label":  {
                                         "en":  "Used Oil Recycled",
                                         "ar":  "لتر زيت مستبدل ومدور"
                                     }
                       },
                       {
                           "number":  "35%",
                           "label":  {
                                         "en":  "Repeat Order Rate",
                                         "ar":  "زيادة في تكرار الطلبات"
                                     }
                       },
                       {
                           "number":  "99.9%",
                           "label":  {
                                         "en":  "Platform Uptime",
                                         "ar":  "استقرار وجاهزية النظام"
                                     }
                       }
                   ]
    },
    {
        "id":  "qaf-lms",
        "badge":  {
                      "en":  "LMS ECOSYSTEM",
                      "ar":  "نظام تعليم إلكتروني"
                  },
        "title":  {
                      "en":  "Qaf LMS (Multi Vendor)",
                      "ar":  "منصة قاف التعليمية"
                  },
        "description":  {
                            "en":  "Multi-vendor learning platform allowing independent teachers to manage courses, students, and payments from individual dashboards.",
                            "ar":  "منصة تعليمية متعددة المعلمين تمكن المعلمين المستقلين من إدارة الدورات والطلاب والمدفوعات من لوحات تحكم منفصلة."
                        },
        "heroSummary":  {
                            "en":  "A scalable, multi-vendor learning platform empowering independent teachers to manage courses, students, and payments from individual dashboards.",
                            "ar":  "منصة تعليمية متكاملة وقابلة للتوسع تمكّن المعلمين المستقلين من إدارة المقررات والطلاب والمدفوعات من لوحات تحكم مخصصة."
                        },
        "year":  "2025",
        "techStackSummary":  "Laravel, React, MySQL",
        "metric":  {
                       "en":  "100+ Teachers, 10k+ Students",
                       "ar":  "100+ معلم، 10k+ طالب"
                   },
        "image":  "assets/imgs/projects/منصة-قاف-التعليمية-06-05-2026_12_32_PM.webp",
        "images":  [
                       "assets/imgs/projects/منصة-قاف-التعليمية-06-05-2026_12_32_PM.webp",
                       "assets/imgs/projects/qaf/2.webp",
                       "assets/imgs/projects/qaf/3.webp",
                       "assets/imgs/projects/qaf/4.webp",
                       "assets/imgs/projects/qaf/5.webp",
                       "assets/imgs/projects/qaf/6.webp",
                       "assets/imgs/projects/qaf/7.webp",
                       "assets/imgs/projects/qaf/8.webp",
                       "assets/imgs/projects/qaf/9.webp",
                       "assets/imgs/projects/qaf/10.webp",
                       "assets/imgs/projects/qaf/11.webp",
                       "assets/imgs/projects/qaf/12.webp",
                       "assets/imgs/projects/qaf/13.webp",
                       "assets/imgs/projects/qaf/14.webp",
                       "assets/imgs/projects/qaf/15.webp",
                       "assets/imgs/projects/qaf/16.webp",
                       "assets/imgs/projects/qaf/17.webp",
                       "assets/imgs/projects/qaf/18.webp",
                       "assets/imgs/projects/qaf/19.webp",
                       "assets/imgs/projects/qaf/20.webp",
                       "assets/imgs/projects/qaf/21.webp",
                       "assets/imgs/projects/qaf/22.webp",
                       "assets/imgs/projects/qaf/23.webp",
                       "assets/imgs/projects/qaf/24.webp",
                       "assets/imgs/projects/qaf/25.webp",
                       "assets/imgs/projects/qaf/26.webp",
                       "assets/imgs/projects/qaf/27.webp",
                       "assets/imgs/projects/qaf/28.webp",
                       "assets/imgs/projects/qaf/29.webp",
                       "assets/imgs/projects/qaf/30.webp",
                       "assets/imgs/projects/qaf/31.webp",
                       "assets/imgs/projects/qaf/32.webp",
                       "assets/imgs/projects/qaf/33.webp",
                       "assets/imgs/projects/qaf/34.webp",
                       "assets/imgs/projects/qaf/35.webp",
                       "assets/imgs/projects/qaf/36.webp",
                       "assets/imgs/projects/qaf/37.webp"
                   ],
        "alt":  {
                    "en":  "Qaf LMS Preview",
                    "ar":  "معاينة منصة قاف التعليمية"
                },
        "liveUrl":  "https://qaf-demo.ahmedgamal.de",
        "detailsUrl":  "projects/detail.html?id=qaf-lms",
        "challenge":  {
                          "en":  "Independent educators needed a cost-effective platform to deliver online courses, manage multiple teachers with separate dashboards, handle student payments, and track progress—without the overhead of building a custom system from scratch.",
                          "ar":  "احتاج المعلمون المستقلون إلى منصة فعالة من حيث التكلفة لتقديم الدورات التدريبية عبر الإنترنت، وإدارة معلمين متعددين من لوحات تحكم منفصلة، ومعالجة مدفوعات الطلاب وتتبع تقدمهم دون الحاجة لبناء نظام من الصفر."
                      },
        "solution":  {
                         "en":  "Built a comprehensive multi-vendor LMS with separate dashboards for each teacher, automated payment processing, course content management, quiz system, progress tracking, and mobile app support for students.",
                         "ar":  "تم بناء نظام تعليمي متكامل متعدد الموردين مع لوحة تحكم مخصصة لكل معلم، ومعالجة تلقائية للمدفوعات، وإدارة محتوى الدورات، ونظام اختبارات ذكي، وتتبع لتقدم الطلاب مع دعم كامل للتطبيقات الذكية."
                     },
        "result":  {
                       "en":  "99.9% uptime, 40% faster checkout, 100+ active teachers on platform generating recurring revenue.",
                       "ar":  "جاهزية بنسبة 99.9%، وعمليات دفع أسرع بنسبة 40%، وأكثر من 100 معلم نشط يحققون إيرادات دورية مستمرة."
                   },
        "techStack":  [
                          "Laravel",
                          "React",
                          "MySQL",
                          "Stripe API",
                          "Firebase",
                          "AWS S3"
                      ],
        "features":  {
                         "en":  [
                                    "Multi-vendor dashboard with individual analytics",
                                    "Automated payment processing & vendor payouts",
                                    "Course management with content versioning",
                                    "Quiz system with auto-grading",
                                    "Student progress tracking & certificates",
                                    "Mobile app for iOS & Android"
                                ],
                         "ar":  [
                                    "لوحة تحكم متعددة المعلمين مع تحليلات منفصلة",
                                    "معالجة المدفوعات والتحويلات المالية تلقائياً",
                                    "إدارة شاملة للدورات وإصدارات المحتوى",
                                    "نظام اختبارات متقدم وتصحيح تلقائي",
                                    "تتبع تقدم الطلاب وإصدار الشهادات",
                                    "تطبيق هاتف يدعم iOS و Android"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "100+",
                           "label":  {
                                         "en":  "Active Teachers",
                                         "ar":  "معلم نشط على المنصة"
                                     }
                       },
                       {
                           "number":  "10k+",
                           "label":  {
                                         "en":  "Active Students",
                                         "ar":  "طالب يستفيد من النظام"
                                     }
                       },
                       {
                           "number":  "99.9%",
                           "label":  {
                                         "en":  "System Uptime",
                                         "ar":  "نسبة استقرار وجاهزية النظام"
                                     }
                       }
                   ]
    },
    {
        "id":  "zain-physics-lms",
        "badge":  {
                      "en":  "LMS ECOSYSTEM",
                      "ar":  "نظام تعليم إلكتروني"
                  },
        "title":  {
                      "en":  "Zain Physics LMS",
                      "ar":  "منصة أحمد المحلاوى"
                  },
        "description":  {
                            "en":  "Comprehensive mobile learning platform for physics students to explore content, take quizzes, and track progress with 99.9% uptime.",
                            "ar":  "منصة تعليمية شاملة للطلاب لاستكشاف المحتوى والقيام بالاختبارات وتتبع التقدم مع توفر 99.9%."
                        },
        "heroSummary":  {
                            "en":  "A comprehensive mobile learning platform enabling physics students to explore content, take quizzes, and track progress with 99.9% uptime.",
                            "ar":  "منصة تعليمية مخصصة لطلاب مادة الفيزياء للوصول للمحاضرات وحل الاختبارات ومتابعة التقدم الدراسي بسهولة."
                        },
        "year":  "2025",
        "techStackSummary":  "Laravel, React Native, MySQL",
        "metric":  {
                       "en":  "5000+ Students",
                       "ar":  "5000+ طالب"
                   },
        "image":  "assets/imgs/projects/zain-physics.webp",
        "images":  [
                       "assets/imgs/projects/zain-physics.webp",
                       "assets/imgs/projects/qaf/9.webp",
                       "assets/imgs/projects/qaf/7.webp",
                       "assets/imgs/projects/qaf/8.webp",
                       "assets/imgs/projects/qaf/6.webp",
                       "assets/imgs/projects/qaf/10.webp",
                       "assets/imgs/projects/qaf/11.webp",
                       "assets/imgs/projects/qaf/12.webp",
                       "assets/imgs/projects/qaf/13.webp",
                       "assets/imgs/projects/qaf/14.webp",
                       "assets/imgs/projects/qaf/15.webp",
                       "assets/imgs/projects/qaf/16.webp",
                       "assets/imgs/projects/qaf/17.webp",
                       "assets/imgs/projects/qaf/18.webp",
                       "assets/imgs/projects/qaf/19.webp",
                       "assets/imgs/projects/qaf/20.webp",
                       "assets/imgs/projects/qaf/21.webp",
                       "assets/imgs/projects/qaf/22.webp",
                       "assets/imgs/projects/qaf/23.webp",
                       "assets/imgs/projects/qaf/24.webp",
                       "assets/imgs/projects/qaf/25.webp",
                       "assets/imgs/projects/qaf/26.webp",
                       "assets/imgs/projects/qaf/27.webp",
                       "assets/imgs/projects/qaf/28.webp",
                       "assets/imgs/projects/qaf/29.webp",
                       "assets/imgs/projects/qaf/30.webp",
                       "assets/imgs/projects/qaf/31.webp",
                       "assets/imgs/projects/qaf/32.webp",
                       "assets/imgs/projects/qaf/33.webp",
                       "assets/imgs/projects/qaf/34.webp",
                       "assets/imgs/projects/qaf/35.webp",
                       "assets/imgs/projects/qaf/36.webp",
                       "assets/imgs/projects/qaf/37.webp"
                   ],
        "alt":  {
                    "en":  "Zain Physics LMS",
                    "ar":  "زين فيزيكس LMS"
                },
        "liveUrl":  "https://lms-demo.ahmedgamal.de",
        "detailsUrl":  "projects/detail.html?id=zain-physics-lms",
        "challenge":  {
                          "en":  "Physics students needed a dedicated mobile platform to access course materials, take quizzes, and track their learning progress with reliable performance across all devices and network conditions.",
                          "ar":  "احتاج طلاب مادة الفيزياء إلى منصة رقمية مخصصة للوصول إلى المواد التعليمية، وحل الاختبارات، وتتبع مستواهم مع أداء سريع وموثوق تحت مختلف سرعات الإنترنت."
                      },
        "solution":  {
                         "en":  "Built a comprehensive mobile LMS with course content management, interactive quizzes with auto-grading, progress tracking, offline mode support, and real-time performance analytics for teachers.",
                         "ar":  "تم تطوير منصة تعليمية وتطبيق تفاعلي يشمل إدارة الدروس، واختبارات تفاعلية بتصحيح فوري، وتتبع تقدم الطلاب، مع لوحة تحكم ذكية للتحليلات التربوية."
                     },
        "result":  {
                       "en":  "99.9% uptime, 40% faster checkout, 5000+ active students, 85% quiz completion rate.",
                       "ar":  "نسبة استقرار 99.9%، وأكثر من 5000 طالب نشط، ونسبة إكمال للاختبارات تخطت 85%."
                   },
        "techStack":  [
                          "Laravel",
                          "React Native",
                          "MySQL",
                          "Firebase",
                          "AWS S3",
                          "Stripe"
                      ],
        "features":  {
                         "en":  [
                                    "Comprehensive course content management",
                                    "Interactive quiz system with auto-grading",
                                    "Real-time progress tracking & analytics",
                                    "Offline mode for content access",
                                    "Mobile app for iOS & Android",
                                    "Teacher performance dashboard"
                                ],
                         "ar":  [
                                    "إدارة متكاملة للمحتوى التعليمي والمحاضرات",
                                    "نظام اختبارات ذكي مع التصحيح الفوري",
                                    "تتبع إحصائي دقيق لمستوى الطلاب",
                                    "لوحة إدارية شاملة للمعلم لمتابعة النتائج",
                                    "أداء فائق واستجابة سريعة على كافة الشاشات"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "5000+",
                           "label":  {
                                         "en":  "Active Students",
                                         "ar":  "طالب مسجل"
                                     }
                       },
                       {
                           "number":  "99.9%",
                           "label":  {
                                         "en":  "Platform Uptime",
                                         "ar":  "نسبة جاهزية الخادم"
                                     }
                       },
                       {
                           "number":  "85%",
                           "label":  {
                                         "en":  "Quiz Completion Rate",
                                         "ar":  "نسبة إتمام الاختبارات"
                                     }
                       }
                   ]
    },
    {
        "id":  "clothe-ecommerce",
        "badge":  {
                      "en":  "E-COMMERCE",
                      "ar":  "متجر لبيع الملابس الرجالى"
                  },
        "title":  {
                      "en":  "Clothe E-commerce",
                      "ar":  "متجر الملابس الرجالية"
                  },
        "description":  {
                            "en":  "Automated reconciliation system for multi-provider payments with intelligent split-payment handling, saving 60 hours monthly.",
                            "ar":  "نظام تسوية المدفوعات الآلي مع معالجة سريعة للمخزون وخيارات المقاسات والألوان المتعددة."
                        },
        "heroSummary":  {
                            "en":  "A modern fashion e-commerce storefront with optimized variant selection, instant checkout, and automated multi-channel inventory management.",
                            "ar":  "متجر أزياء إلكتروني حديث يتميز بتحديد المقاسات والألوان بسهولة، وإتمام فوري للطلبات، وإدارة مؤتمتة للمخزون."
                        },
        "year":  "2024",
        "techStackSummary":  "Laravel, Vue.js, MySQL",
        "metric":  {
                       "en":  "10k+ Orders Fulfilled",
                       "ar":  "10k+ طلب مكتمل"
                   },
        "image":  "assets/imgs/projects/image.webp",
        "images":  [
                       "assets/imgs/projects/image.webp",
                       "assets/imgs/projects/ecommerce.webp"
                   ],
        "alt":  {
                    "en":  "Clothe E-commerce",
                    "ar":  "متجر لبيع الملابس الرجالى"
                },
        "liveUrl":  "https://amstore.ahmedgamal.de",
        "detailsUrl":  "projects/detail.html?id=clothe-ecommerce",
        "challenge":  {
                          "en":  "Managing large product catalogs with size/color variants, multi-provider payment reconciliation, and real-time inventory updates without slowdowns.",
                          "ar":  "إدارة كتالوج ضخم من الملابس مع تعدد المقاسات والألوان ومزامنة المخزون اللحظية وربط بوابات دفع متعددة بشكل موثوق."
                      },
        "solution":  {
                         "en":  "Engineered an optimized e-commerce system with variant caching, automated payment verification, fast multi-step checkout, and seamless order dispatch tracking.",
                         "ar":  "تم بناء متجر متقدم عالي السرعة بنظام كاشينج ذكي، ومزامنة فورية للمخزون، وتجربة شراء سلسة في أقل من دقيقة."
                     },
        "result":  {
                       "en":  "60% faster page loading, zero order duplication, and automated reconciliation saving 60 hours monthly.",
                       "ar":  "سرعة تحميل أكبر بنسبة 60% وتوفير أكثر من 60 ساعة عمل شهرياً في مطابقة الحسابات المالية."
                   },
        "techStack":  [
                          "Laravel",
                          "Vue.js",
                          "MySQL",
                          "Redis",
                          "Payment Gateways",
                          "Tailwind CSS"
                      ],
        "features":  {
                         "en":  [
                                    "Smart inventory & color/size variant manager",
                                    "Automated payment reconciliation system",
                                    "Real-time order tracking & SMS notifications",
                                    "Fast one-page checkout experience",
                                    "High performance image optimization",
                                    "Customer review & rating system"
                                ],
                         "ar":  [
                                    "إدارة ذكية للمنتجات والمقاسات والألوان",
                                    "تسوية وتدقيق آلي لمدفوعات البطاقات والمحافظ",
                                    "تتبع لحظي لحالة الشحنات مع تنبيهات SMS",
                                    "إتمام طلب سريع ومبسط لتحقيق أعلى معدل تحويل",
                                    "تحسين فائق للصور وسرعة التصفح",
                                    "نظام تقييمات وآراء العملاء"
                                ]
                     },
        "impact":  [
                       {
                           "number":  "60h",
                           "label":  {
                                         "en":  "Saved Monthly",
                                         "ar":  "ساعات عمل موفرة شهرياً"
                                     }
                       },
                       {
                           "number":  "99.8%",
                           "label":  {
                                         "en":  "Payment Accuracy",
                                         "ar":  "دقة مطابقة المدفوعات"
                                     }
                       },
                       {
                           "number":  "40%",
                           "label":  {
                                         "en":  "Sales Growth",
                                         "ar":  "نمو في المبيعات"
                                     }
                       }
                   ]
    }
];

